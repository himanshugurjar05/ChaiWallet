import PaymentPage from '@/components/PaymentPage'

export default async function Page({ params }) {
  const resolvedParams = await params;
  const { username } = resolvedParams;

  return (
    <PaymentPage username={username}/>
    // <div className="text-white bg-[#0d1117] min-h-screen p-8">
    //   {/* Cover Image */}
    //   <Image
    //     src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo2MjAsIndlIjoxfQ%3D%3D/18.gif?token-hash=cPl679-3FSwSUU7vhNgWZDPf7I2IeI8RtAbfZBesxFQ%3D&token-time=1764806400"
    //     alt="cover"
    //     width={800}
    //     height={400}
    //     className="w-full object-cover rounded-lg mb-6"
    //     unoptimized
    //   />

    //   {/* Username and Info */}
    //   <div className="text-center mb-6">
    //     <h1 className="text-2xl font-bold">@{username}</h1>
    //     <p className="text-gray-400 mt-2">Creating Animated art for VTTs</p>
    //     <p className="text-gray-400 text-sm mt-1">
    //       9,719 members · 82 posts · $15,450/release
    //     </p>
    //   </div>

    //   {/* Main Two-Column Section */}
    //   <div className="grid md:grid-cols-2 gap-8 mt-10">
    //     {/* Supporters List */}
    //     <div className="bg-[#161b22] p-6 rounded-xl shadow-md">
    //       <h2 className="text-xl font-semibold mb-4">Supporters</h2>
    //       <ul className="space-y-3 text-gray-300">
    //         {Array(3)
    //           .fill(0)
    //           .map((_, i) => (
    //             <li key={i}>
    //               <span className="font-medium text-white">Shubham</span> donated{" "}
    //               <span className="text-green-400 font-semibold">$30</span> with a message:{" "}
    //               <span className="italic text-white">
    //                 I support you bro. Lots of ❤️
    //               </span>
    //             </li>
    //           ))}
    //       </ul>
    //     </div>

    //     {/* Payment Form */}
    //     <div className="bg-[#161b22] p-6 rounded-xl shadow-md">
    //       <h2 className="text-xl font-semibold mb-4">Make a Payment</h2>
    //       <form className="space-y-4">
    //         <input
    //           type="text"
    //           placeholder="Enter Name"
    //           className="w-full p-2 rounded bg-[#0d1117] border border-gray-700 text-white outline-none focus:border-blue-500"
    //         />
    //         <input
    //           type="text"
    //           placeholder="Enter Message"
    //           className="w-full p-2 rounded bg-[#0d1117] border border-gray-700 text-white outline-none focus:border-blue-500"
    //         />
    //         <input
    //           type="number"
    //           placeholder="Enter Amount"
    //           className="w-full p-2 rounded bg-[#0d1117] border border-gray-700 text-white outline-none focus:border-blue-500"
    //         />
    //         <button
    //           type="button"
    //           className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition"
    //         >
    //           Pay
    //         </button>
    //       </form>

    //       {/* Quick Pay Buttons */}
    //       <div className="flex gap-3 justify-center mt-4">
    //         {["$10", "$20", "$30"].map((amt) => (
    //           <button
    //             key={amt}
    //             className="px-4 py-1 bg-gray-800 rounded hover:bg-gray-700 transition"
    //           >
    //             Pay {amt}
    //           </button>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
