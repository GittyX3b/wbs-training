import { Router } from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "#controllers";
import { authMiddleWare } from "#middleware";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.post("/", authMiddleWare, createProduct);
productRouter.get("/:id", getProductById);
productRouter.put("/:id", authMiddleWare, updateProduct);
productRouter.delete("/:id", authMiddleWare, deleteProduct);

export { productRouter };
