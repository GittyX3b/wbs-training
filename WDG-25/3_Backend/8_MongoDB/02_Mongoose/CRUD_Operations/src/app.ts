import "#db";
import { Product } from "#models";
import type { ProductType } from "#types";

try {
  const newProduct = await Product.create<ProductType>({
    name: "Sample Product",
    price: 19.99,
    stock: 100,
    tags: ["electronics", "gadgets"],
  });
  console.log(newProduct);
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error("\\x1b[31mSomething went wrong", error.message, "\\x1b[0m");
  } else {
    console.error("\\x1b[31mAn unknown error occurred\\x1b[0m");
  }
}
