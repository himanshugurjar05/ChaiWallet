"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Safe signout function with refresh
  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center px-6 h-16 relative">
      <Link href={'/'}>
      <div className="logo font-bold text-lg">GetMeAChai!</div>
      </Link>

      <div className="flex items-center gap-4">
        {session ? (
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition">
              <img
                src={
                  session.user.image ||
                  "https://www.svgrepo.com/show/452030/avatar.svg"
                }
                alt="User Avatar"
                className="w-6 h-6 rounded-full border"/>

              <span className="hidden sm:inline font-medium">
                {session.user.email}
              </span>
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  menuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg py-2 z-50">
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 hover:bg-gray-700 transition"
                  onClick={() => setMenuOpen(false)}>
                  Dashboard
                </Link>
                <Link
                  href={`/${session.user.name}`}
                  className="block px-4 py-2 hover:bg-gray-700 transition"
                  onClick={() => setMenuOpen(false)}>
                  Your Page
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 hover:bg-gray-700 transition"
                  onClick={() => setMenuOpen(false)}>
                  Settings
                </Link>

                <hr className="border-gray-700" />

                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700 transition">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="px-6 py-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition">
              Login
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-80 bg-[#0b0b15] text-white rounded-lg shadow-lg border border-gray-700 z-50 p-6 text-center">
                <h2 className="text-xl font-semibold mb-5">
                  Login/SignUp to Get your fans to support you
                </h2>

                <div className="flex flex-col gap-3">
                  {[
                    {
                      name: "Google",
                      icon: "https://www.svgrepo.com/show/355037/google.svg",
                      id: "google",
                    },
                    {
                      name: "LinkedIn",
                      icon: "https://www.svgrepo.com/show/448234/linkedin.svg",
                      id: "linkedin",
                    },
                    {
                      name: "Twitter",
                      icon: "https://www.svgrepo.com/show/475689/twitter-color.svg",
                      id: "twitter",
                    },
                    {
                      name: "Facebook",
                      icon: "https://www.svgrepo.com/show/452196/facebook-1.svg",
                      id: "facebook",
                    },
                    {
                      name: "GitHub",
                      icon: "https://www.svgrepo.com/show/512317/github-142.svg",
                      id: "github",
                    },
                    {
                      name: "Apple",
                      icon: "https://www.svgrepo.com/show/303128/apple-logo.svg",
                      id: "apple",
                    },
                  ].map((provider) => (
                    <button
                      key={provider.id}
                      onClick={() => signIn(provider.id)}
                      className="flex items-center justify-center gap-3 bg-white text-black rounded-md py-2 font-medium hover:bg-gray-200 transition">
                      <img
                        src={provider.icon}
                        alt={provider.name}
                        className="w-5 h-5"
                        />
                      Continue with {provider.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
