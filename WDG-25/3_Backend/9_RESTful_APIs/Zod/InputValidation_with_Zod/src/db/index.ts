import { envOrThrow } from "#utils";
import mongoose from "mongoose";

try {
  await mongoose.connect(envOrThrow("MONGO_URI"), {
    dbName: "inputvalidation_with_zod",
  });
  console.log("\x1b[35mMongoDB connected via Mongoose\x1b[0m");
} catch (error) {
  console.error("MongoDB connection error:", error);
  process.exit(1);
}
