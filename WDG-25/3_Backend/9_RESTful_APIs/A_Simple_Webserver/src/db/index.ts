// db/index.ts
// Import mongoose
import mongoose from "mongoose";

try {
  // Connect
  await mongoose.connect(process.env.MONGO_URI!, {
    dbName: "test", // Replace with your actual database name
  });
  console.log("\\x1b[35mMongoDB connected via Mongoose\\x1b[0m");
} catch (error) {
  // Log error and end Node process if it fails
  console.error("MongoDB connection error:", error);
  process.exit(1);
}
