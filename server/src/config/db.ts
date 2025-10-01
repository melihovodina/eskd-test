import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const MONGO_URI =
  process.env.MODE === 'prod'
    ? process.env.MONGO_URI || ""
    : process.env.MODE === 'deploy'
      ? process.env.MONGO_ATLAS_URI || ""
      : process.env.MONGO_URI_DEV || "";


export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
