import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    articleId: {
      type: String,
      required: [true, "Article ID is required"],
      trim: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = model("Product", productSchema);
