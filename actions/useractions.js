// "use server";

// import Razorpay from "razorpay";
// import Payment from "@/models/Payment";
// import connectDb from "@/db/connectDb";
// import User from "@/models/User";

// export const initiate = async (amount, to_username, paymentform) => {
//   await connectDb();
//   var instance = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
//   });

//   instance.orders.create({
//     amount: 50000,
//     currency: "INR",
//     receipt: "receipt#1",
//     notes: {
//       key1: "value3",
//       key2: "value2",
//     },
//   })
//   let options = {
//     amount: Number.parseInt(amount),
//     currency: "INR",
//   }

//   let x = await instance.orders.create(options)

//   await Payment.create({oid: x.id, amount: amount, to_user: to_username, name: paymentform.name,
//     message: paymentform.message})

//   return x;
// };



//-------22
"use server";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDb from "@/db/connectDb";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDb();

  // ✅ Razorpay instance
  const instance = new Razorpay({
    key_id:  process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  // console.log(process.env.RAZORPAY_KEY_SECRET)

  // ✅ Create Razorpay order (amount in paise)
  const options = {
    amount: Number.parseInt(amount) * 100, // convert to paise
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
    notes: {
      name: paymentform.name,
      to_user: to_username,
    },
  };

  const order = await instance.orders.create(options);

  // ✅ Save payment details in MongoDB
  await Payment.create({
    oid: order.id,
    amount: amount,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });

  // ✅ Return order to frontend
  return order;
};
