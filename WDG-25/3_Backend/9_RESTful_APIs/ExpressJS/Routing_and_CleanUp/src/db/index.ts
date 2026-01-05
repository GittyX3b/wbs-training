import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.MONGO_URI!, {
    dbName: "express_routing_and_cleanup",
  });
  console.log("!!! MongoDB connected via Mongoose");
} catch (error) {
  console.error("MongoDB connection error:", error);
  process.exit(1);
}
