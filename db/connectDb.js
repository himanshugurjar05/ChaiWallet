import mongoose from "mongoose";

const connectDb = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("⚡ Already Connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect("mongodb://localhost:27017/chai");
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ DB Connection Error:", err.message);
  }
};

export default connectDb;