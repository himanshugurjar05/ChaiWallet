// "use client";
// import React, { useState } from "react";
// import Script from "next/script";
// import Image from "next/image";
// import { initiate } from "@/actions/useractions";

// export default function PaymentPage({ username }) {
//   const [currentUser, setcurrentUser] = useState({})
//   const [paymentform, setPaymentform] = useState({
//     name: "",
//     message: "",
//     amount: "",
//   });

//   // ✅ Fixed: async pay + INR currency + min amount check
//   const pay = async (amount) => {
//     if (!amount || amount < 1) {
//       alert("Please enter at least ₹1 to continue");
//       return;
//     }

//     try {
//       const a = await initiate(amount, username, paymentform);
//       const orderId = a.id;

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: amount * 100, // amount in paisa
//         currency: "INR", // ✅ fixed exact 3-letter currency
//         name: "Get Me A Chai",
//         description: "Test Transaction",
//         image: "https://example.com/your_logo",
//         order_id: orderId,
//         callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
//         prefill: {
//           name: paymentform.name || "Guest User",
//           email: "guest@example.com",
//           contact: "+919876543210",
//         },
//         notes: {
//           address: "Razorpay Corporate Office",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };
//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (err) {
//       console.error("Payment initiation failed:", err);
//     }
//   };

//   // handle input changes
//   const handleChange = (e) => {
//     setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
//   };

//   // quick pay buttons
//   const handleQuickPay = (amt) => {
//     setPaymentform({ ...paymentform, amount: amt });
//   };

//   return (
//     <>
//       <Script src="https://checkout.razorpay.com/v1/checkout.js" />

//       <div className="text-white bg-[#0d1117] min-h-screen p-8">
//         {/* Cover Image */}
//         <Image
//           src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo2MjAsIndlIjoxfQ%3D%3D/18.gif?token-hash=cPl679-3FSwSUU7vhNgWZDPf7I2IeI8RtAbfZBesxFQ%3D&token-time=1764806400"
//           alt="cover"
//           width={800}
//           height={400}
//           className="w-full object-cover rounded-lg mb-6"
//           unoptimized
//         />

//         {/* Username and Info */}
//         <div className="text-center mb-6">
//           {/* <Image src={currentUser.profilepic}/> */}
//           <h1 className="text-2xl font-bold">@{username}</h1>
//           <p className="text-gray-400 mt-2">Creating Animated art for VTTs</p>
//           <p className="text-gray-400 text-sm mt-1">
//             9,719 members · 82 posts · $15,450/release
//           </p>
//         </div>

//         {/* Main Two-Column Section */}
//         <div className="grid md:grid-cols-2 gap-8 mt-10">
//           {/* Supporters List */}
//           <div className="bg-[#161b22] p-6 rounded-xl shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Supporters</h2>
//             <ul className="space-y-3 text-gray-300">
//               {paymentform.length == 0 && <li>No Payments yet</li>}
//               {Array(3)
//                 .fill(0)
//                 .map((_, i) => (
//                   <li key={i}>
//                     <span className="font-medium text-white">Shubham</span>{" "}
//                     donated{" "}
//                     <span className="text-green-400 font-semibold">$30</span>{" "}
//                     with a message:{" "}
//                     <span className="italic text-white">
//                       I support you bro. Lots of ❤️
//                     </span>
//                   </li>
//                 ))}
//             </ul>
//           </div>

//           {/* Payment Form */}
//           <div className="bg-[#161b22] p-6 rounded-xl shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Make a Payment</h2>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 value={paymentform.name}
//                 onChange={handleChange}
//                 placeholder="Enter Name"
//                 className="w-full p-2 rounded bg-[#0d1117] border border-gray-700 text-white outline-none focus:border-blue-500"
//               />
//               <input
//                 type="text"
//                 name="message"
//                 value={paymentform.message}
//                 onChange={handleChange}
//                 placeholder="Enter Message"
//                 className="w-full p-2 rounded bg-[#0d1117] border border-gray-700 text-white outline-none focus:border-blue-500"
//               />
//               <input
//                 type="number"
//                 name="amount"
//                 value={paymentform.amount}
//                 onChange={handleChange}
//                 placeholder="Enter Amount"
//                 className="w-full p-2 rounded bg-[#0d1117] border border-gray-700 text-white outline-none focus:border-blue-500"
//               />
//               <button
//                 id="rzp-button1"
//                 type="button"
//                 onClick={() => pay(paymentform.amount)}
//                 className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition"
//               >
//                 Pay
//               </button>
//             </form>

//             {/* Quick Pay Buttons */}
//             <div className="flex gap-3 justify-center mt-4">
//               {[10, 20, 30].map((amt) => (
//                 <button
//                   onClick={() => handleQuickPay(amt)}
//                   key={amt}
//                   className="px-4 py-1 bg-gray-800 rounded hover:bg-gray-700 transition"
//                 >
//                   ₹{amt}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




"use client";
import React, { useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { initiate } from "@/actions/useractions";

export default function PaymentPage({ username }) {
  const [supporters, setSupporters] = useState([]); // ✅ added supporters
  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });

  // ✅ Payment Function
  const pay = async (amount) => {
    if (!amount || amount < 1) {
      alert("Please enter at least ₹1 to continue");
      return;
    }

    try {
      const a = await initiate(amount, username, paymentform);
      const orderId = a.id;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100, // amount in paisa
        currency: "INR",
        name: "Get Me A Chai",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId,
        callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,

        // ✅ Razorpay success handler
        handler: function (response) {
          alert("Payment successful! 🎉 Thank you for your support!");

          setSupporters((prev) => [
            {
              name: paymentform.name || "Anonymous",
              amount: paymentform.amount,
              message: paymentform.message || "No message",
            },
            ...prev,
          ]);

          setPaymentform({ name: "", message: "", amount: "" });
        },

        prefill: {
          name: paymentform.name || "Guest User",
          email: "guest@example.com",
          contact: "+919876543210",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (err) {
      console.error("Payment initiation failed:", err);
    }
  };

  // handle input changes
  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  // quick pay buttons
  const handleQuickPay = (amt) => {
    setPaymentform({ ...paymentform, amount: amt });
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className="text-white bg-[#0d1117] min-h-screen p-8">
        {/* Cover Image */}
        <Image
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo2MjAsIndlIjoxfQ%3D%3D/18.gif?token-hash=cPl679-3FSwSUU7vhNgWZDPf7I2IeI8RtAbfZBesxFQ%3D&token-time=1764806400"
          alt="cover"
          width={800}
          height={400}
          className="w-full object-cover rounded-lg mb-6"
          unoptimized
        />

        {/* Username and Info */}
        <div className="text-center mb-6">
          {/* <Image src={currentUser.profilepic}/> */}
          <h1 className="text-2xl font-bold">@{username}</h1>
          <p className="text-gray-400 mt-2">Creating Animated art for VTTs</p>
          <p className="text-gray-400 text-sm mt-1">
            9,719 members · 82 posts · $15,450/release
          </p>
        </div>

        {/* Main Two-Column Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Supporters List */}
          <div className="bg-[#161b22] p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Supporters</h2>
            <ul className="space-y-3 text-gray-300">
              {supporters.length === 0 ? (
                <li>No Payments yet</li>
              ) : (
                supporters.map((s, i) => (
                  <li key={i}>
                    <span className="font-medium text-white">{s.name}</span>{" "}
                    donated{" "}
                    <span className="text-green-400 font-semibold">
                      ₹{s.amount}
                    </span>{" "}
                    with a message:{" "}
                    <span className="italic text-white">
                      {s.message}
                    </span>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Payment Form */}
          <div className="bg-[#161b22] p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Make a Payment</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                value={paymentform.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="w-full p-2 rounded bg-[#0d1117] border border-gray-700 text-white outline-none focus:border-blue-500"
              />
              <input
                type="text"
                name="message"
                value={paymentform.message}
                onChange={handleChange}
                placeholder="Enter Message"
                className="w-full p-2 rounded bg-[#0d1117] border border-gray-700 text-white outline-none focus:border-blue-500"
              />
              <input
                type="number"
                name="amount"
                value={paymentform.amount}
                onChange={handleChange}
                placeholder="Enter Amount"
                className="w-full p-2 rounded bg-[#0d1117] border border-gray-700 text-white outline-none focus:border-blue-500"
              />
              <button
                id="rzp-button1"
                type="button"
                onClick={() => pay(paymentform.amount)}
                className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition"
              >
                Pay
              </button>
            </form>

            {/* Quick Pay Buttons */}
            <div className="flex gap-3 justify-center mt-4">
              {[10, 20, 30].map((amt) => (
                <button
                  onClick={() => handleQuickPay(amt)}
                  key={amt}
                  className="px-4 py-1 bg-gray-800 rounded hover:bg-gray-700 transition"
                >
                  ₹{amt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
