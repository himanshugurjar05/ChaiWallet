// import NextAuth from 'next-auth'
// // import AppleProvider from 'next-auth/providers/apple'
// // import FacebookProvider from 'next-auth/providers/facebook'
// // import GoogleProvider from 'next-auth/providers/google'
// // import EmailProvider from 'next-auth/providers/email'
// import GitHubProvider from 'next-auth/providers/github'

// export const authoptions = NextAuth({
//   providers: [
//     // OAuth authentication providers...
//     GitHubProvider({
//     clientId: process.env.GITHUB_ID,
//     clientSecret: process.env.GITHUB_SECRET
//   }),
//     // AppleProvider({
//     //   clientId: process.env.APPLE_ID,
//     //   clientSecret: process.env.APPLE_SECRET
//     // }),
//     // FacebookProvider({
//     //   clientId: process.env.FACEBOOK_ID,
//     //   clientSecret: process.env.FACEBOOK_SECRET
//     // }),
//     // GoogleProvider({
//     //   clientId: process.env.GOOGLE_ID,
//     //   clientSecret: process.env.GOOGLE_SECRET
//     // }),
//     // // Passwordless / email sign in
//     // EmailProvider({
//     //   server: process.env.MAIL_SERVER,
//     //   from: 'NextAuth.js <no-reply@example.com>'
//     // }),
//   ]
// })

// export {authoptions as GET, authoptions as POST}

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/User";
import connectDb from "@/db/connectDb";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        // ensure email is never undefined (GitHub may hide it)
        return {
          id: profile.id,
          name: profile.name || profile.login,
          email: profile.email || `${profile.login}@github.com`,
          image: profile.avatar_url,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email }) {
      try {
        if (account.provider === "github") {
          await connectDb();
          // fallback for hidden GitHub email
          const userEmail = email || user.email || `${user.name}@github.com`;

          let existingUser = await User.findOne({ email: userEmail });
          if (!existingUser) {
            const newUser = new User({
              email: userEmail,
              username: userEmail.split("@")[0],
            });
            await newUser.save();
            user.name = newUser.username;
          } else {
            user.name = existingUser.username;
          }
        }
        return true;
      } catch (error) {
        console.error("❌ SignIn Error:", error);
        return false;
      }
    },

    async session({ session }) {
      await connectDb();
      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser) {
        session.user.name = dbUser.username;
        session.user.id = dbUser._id;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
