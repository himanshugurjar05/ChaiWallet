// import { NextResponse } from "next/server";
// import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
// import Payment from "@/models/Payment";
// import connectDb from "@/db/connectDb";
// import User from "@/models/User";

// export const POST = async (req) => {
//   await connectDb();
//   let body = await req.formData();
//   body = Object.fromEntries(body);

//   // ✅ Check if razorpay_order_id exists in DB
//   let p = await Payment.findOne({ oid: body.razorpay_order_id });
//   if (!p) {
//     return NextResponse.json({
//       success: false,
//       message: "Order ID not found",
//     });
//   }

//   // ✅ Fetch secret key of the creator who receives payment
//   let user = await User.findOne({ username: p.to_user });
//   const secret = user?.razorpaysecret || process.env.RAZORPAY_KEY_SECRET; // fallback for safety

//   // ✅ Verify payment signature
//   const isValid = validatePaymentVerification(
//     {
//       order_id: body.razorpay_order_id,
//       payment_id: body.razorpay_payment_id,
//     },
//     body.razorpay_signature,
//     secret
//   );

//   if (isValid) {
//     // ✅ Update payment as done
//     const updatedPayment = await Payment.findOneAndUpdate(
//       { oid: body.razorpay_order_id },
//       { done: "true" },
//       { new: true }
//     );

//     // ✅ Redirect to user profile page with success query
//     return NextResponse.redirect(
//       `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`
//     );
//   } else {
//     return NextResponse.json({
//       success: false,
//       message: "Payment verification failed",
//     });
//   }
// };


// import { NextResponse } from "next/server";
// import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
// import Payment from "@/models/Payment";
// import connectDb from "@/db/connectDb";
// import User from "@/models/User";

// export const POST = async (req) => {
//   await connectDb();
//   let body = await req.formData();
//   body = Object.fromEntries(body);

//   // ✅ Check if razorpay_order_id exists in DB
//   let p = await Payment.findOne({ oid: body.razorpay_order_id });
//   if (!p) {
//     return NextResponse.json({
//       success: false,
//       message: "Order ID not found",
//     });
//   }

//   // ✅ Fetch secret key of the creator who receives payment
//   let user = await User.findOne({ username: p.to_user });
//   const secret = user?.razorpaysecret || process.env.RAZORPAY_KEY_SECRET; // fallback for safety

//   // ✅ Verify payment signature
//   const isValid = validatePaymentVerification(
//     {
//       order_id: body.razorpay_order_id,
//       payment_id: body.razorpay_payment_id,
//     },
//     body.razorpay_signature,
//     RAZORPAY_KEY_SECRET
//   );

//   if (isValid) {
//     // ✅ Update payment as done
//     const updatedPayment = await Payment.findOneAndUpdate(
//       { oid: body.razorpay_order_id },
//       { done: "true" },
//       { new: true }
//     );

//     // ✅ Redirect to user profile page with success query
//     return NextResponse.redirect(
//       `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`
//     );
//   } else {
//     return NextResponse.json({
//       success: false,
//       message: "Payment verification failed",
//     });
//   }
// };


import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

export const POST = async (req) => {
  try {
    await connectDb();
    let body = await req.formData();
    body = Object.fromEntries(body);

    // ✅ 1. Check if razorpay_order_id exists in DB
    const payment = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!payment) {
      return NextResponse.json({
        success: false,
        message: "Order ID not found",
      });
    }

    // ✅ 2. Fetch secret key of the creator who receives payment
    const user = await User.findOne({ username: payment.to_user });
    const secret =
      user?.razorpaysecret || process.env.RAZORPAY_KEY_SECRET; // fallback for safety

    // ✅ 3. Verify payment signature (use the correct secret variable!)
    const isValid = validatePaymentVerification(
      {
        order_id: body.razorpay_order_id,
        payment_id: body.razorpay_payment_id,
      },
      body.razorpay_signature,
      secret // ✅ FIXED: use "secret" instead of undefined variable
    );

    if (isValid) {
      // ✅ 4. Update payment as done: true (boolean, not string)
      const updatedPayment = await Payment.findOneAndUpdate(
        { oid: body.razorpay_order_id },
        { done: true, updatedAt: new Date() }, // ✅ FIXED: boolean true, not "true"
        { new: true }
      );

      // ✅ 5. Redirect user to profile page with success query
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`
      );
    } else {
      return NextResponse.json({
        success: false,
        message: "Payment verification failed",
      });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json({
      success: false,
      message: "Server error during payment verification",
      error: error.message,
    });
  }
};
