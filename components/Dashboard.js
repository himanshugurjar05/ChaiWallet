"use client";
import React, { useState } from "react";

export default function Dashboard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    profilePicture: "",
    coverPicture: "",
    razorpayId: "",
    razorpaySecret: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted ✅", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] flex justify-center items-center">
      <div className="bg-[#111827] text-white p-8 rounded-2xl shadow-2xl w-[400px]">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Welcome to your Dashboard
        </h1>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <label className="text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="bg-[#1f2937] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="bg-[#1f2937] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Username */}
          <label className="text-sm font-medium">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            required
            className="bg-[#1f2937] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Profile Picture */}
          <label className="text-sm font-medium">Profile Picture URL</label>
          <input
            type="text"
            name="profilePicture"
            value={formData.profilePicture}
            onChange={handleChange}
            placeholder="Profile Picture URL"
            className="bg-[#1f2937] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Cover Picture */}
          <label className="text-sm font-medium">Cover Picture URL</label>
          <input
            type="text"
            name="coverPicture"
            value={formData.coverPicture}
            onChange={handleChange}
            placeholder="Cover Picture URL"
            className="bg-[#1f2937] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Razorpay ID */}
          <label className="text-sm font-medium">Razorpay ID</label>
          <input
            type="text"
            name="razorpayId"
            value={formData.razorpayId}
            onChange={handleChange}
            placeholder="Razorpay ID"
            className="bg-[#1f2937] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Razorpay Secret */}
          <label className="text-sm font-medium">Razorpay Secret</label>
          <input
            type="text"
            name="razorpaySecret"
            value={formData.razorpaySecret}
            onChange={handleChange}
            placeholder="Razorpay Secret"
            className="bg-[#1f2937] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mt-2 transition-all"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}







// "use client";
// import React, { useState } from "react";
// export default function Dashboard() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     username: "",
//     profilePicture: "",
//     coverPicture: "",
//     razorpayId: "",
//     razorpaySecret: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("dashboardData", JSON.stringify(formData)); // ✅ save to localStorage
//     alert("Form submitted successfully!");
//     console.log("Saved ✅", formData);
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0f1a] flex justify-center items-center">
//       <div className="bg-[#111827] text-white p-8 rounded-2xl shadow-2xl w-[400px]">
//         <h1 className="text-2xl font-semibold text-center mb-8">
//           Welcome to your Dashboard
//         </h1>

//         <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
//           <label className="text-sm font-medium">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             required
//             className="bg-[#1f2937] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <label className="text-sm font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             required
//             className="bg-[#1f2937] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <label className="text-sm font-medium">Username</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             placeholder="Enter username"
//             required
//             className="bg-[#1f2937] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <label className="text-sm font-medium">Profile Picture URL</label>
//           <input
//             type="text"
//             name="profilePicture"
//             value={formData.profilePicture}
//             onChange={handleChange}
//             placeholder="Profile Picture URL"
//             className="bg-[#1f2937] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <label className="text-sm font-medium">Cover Picture URL</label>
//           <input
//             type="text"
//             name="coverPicture"
//             value={formData.coverPicture}
//             onChange={handleChange}
//             placeholder="Cover Picture URL"
//             className="bg-[#1f2937] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <label className="text-sm font-medium">Razorpay ID</label>
//           <input
//             type="text"
//             name="razorpayId"
//             value={formData.razorpayId}
//             onChange={handleChange}
//             placeholder="Razorpay ID"
//             className="bg-[#1f2937] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <label className="text-sm font-medium">Razorpay Secret</label>
//           <input
//             type="text"
//             name="razorpaySecret"
//             value={formData.razorpaySecret}
//             onChange={handleChange}
//             placeholder="Razorpay Secret"
//             className="bg-[#1f2937] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mt-2 transition-all"
//           >
//             Save
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
