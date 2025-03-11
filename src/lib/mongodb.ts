import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect("mongodb+srv://Kapil:Nirvana1640@cluster0.sqxm0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    isConnected = true;
    console.log("Connected to MongoDB (Main Database)");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw new Error("Failed to connect to the database");
  }
}
