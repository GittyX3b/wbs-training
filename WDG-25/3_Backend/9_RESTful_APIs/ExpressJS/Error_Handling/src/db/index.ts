import mongoose from "mongoose";
import { envOrThrow } from "#utils";

try {
  await mongoose.connect(envOrThrow("MONGO_URI"), {
    dbName: "express_error_handling",
  });
  console.log("\x1b[35mMongoDB connected via Mongoose\x1b[0m");
} catch (error) {
  console.error("MongoDB connection error:", error);
  process.exit(1);
}
