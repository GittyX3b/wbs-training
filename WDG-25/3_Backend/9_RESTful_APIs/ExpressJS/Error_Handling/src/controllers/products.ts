import { type RequestHandler } from "express";
import { type ProductType } from "#types";
import { Product } from "#models";

const getProducts: RequestHandler = async (req, res) => {
  const products = await Product.find().lean();
  res.status(200).json(products);
};

const createProduct: RequestHandler = async (req, res) => {
  const { articleId, name, description } = req.body as ProductType;
  if (!articleId || !name || !description)
    throw new Error("articleId, name, and description are required", {
      cause: 400,
    });

  const product = await Product.create<ProductType>({
    articleId,
    name,
    description,
  });

  res.status(201).json(product);
};

const getProductById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id).lean();

  if (!product) throw new Error("Product not found", { cause: 404 });

  res.status(200).json(product);
};

const updateProduct: RequestHandler = async (req, res) => {
  const {
    body: { articleId, name, description },
    params: { id },
  } = req;
  if (!articleId?.trim() || !name?.trim() || !description?.trim())
    throw new Error("articleId, name, and description are required", {
      cause: 400,
    });

  const product = await Product.findById(id);
  if (!product) throw new Error("Product not found", { cause: 404 });

  product.articleId = articleId;
  product.name = name;
  product.description = description;
  await product.save();

  res.status(200).json(product);
};

const deleteProduct: RequestHandler = async (req, res) => {
  const {
    params: { id },
  } = req;
  const product = await Product.findByIdAndDelete(id);
  if (!product) throw new Error("Product not found", { cause: 404 });
  res.status(200).json({ message: "Product deleted" });
};

export {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
