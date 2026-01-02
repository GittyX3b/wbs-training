// db/index.ts
// Import mongoose
import mongoose from "mongoose";

try {
  // Connect
  await mongoose.connect(process.env.MONGO_URI!, {
    dbName: "testWithExpress", // Replace with your actual database name
  });
  console.log("!! => MongoDB connected via Mongoose");
} catch (error) {
  // Log error and end Node process if it fails
  console.error("MongoDB connection error:", error);
  process.exit(1);
}
