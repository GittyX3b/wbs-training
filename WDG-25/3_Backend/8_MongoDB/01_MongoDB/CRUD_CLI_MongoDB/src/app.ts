//import { db } from "#db";
import { db } from "./db/index.ts";
import { ObjectId } from "mongodb";
import { Command } from "commander";

const program = new Command();
program
  .name("ecommerce-cli")
  .description("Simple product CRUD CLI")
  .version("1.0.0");

// CREATE
program
  .command("add")
  .description("Add a new product")
  .argument("<name>", "Product name")
  .argument("<stock>", "Stock quantity")
  .argument("<price>", "Product price")
  .action(async (name, stockStr, priceStr) => {
    await db.collection("products").insertOne({
      name: name,
      price: Number(priceStr),
      stock: Number(stockStr),
      created_at: new Date(),
    });
  });

// GET
program
  .command("get")
  .description("Get a product by its ID")
  .argument("<id>", "Product ID")
  .action(async (id) => {
    try {
      const product = await db
        .collection("products")
        .findOne({ _id: new ObjectId(id) });

      if (!product) {
        console.log(`No product found with ID ${id}`);
        return;
      }

      console.table([
        {
          id: product._id.toString(),
          name: product.name,
          price: product.price,
          stock: product.stock,
          created_at: product.created_at,
        },
      ]);
    } catch (error) {
      console.error("Invalid ID or MongoDB error:", error.message);
    }
  });

// DELETE
program
  .command("delete")
  .description("Delete product by its ID")
  .argument("<id>", "Product ID")
  .action(async (id) => {
    try {
      const result = await db
        .collection("products")
        .deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 0) {
        console.log(`No product found with ID ${id}`);
        return;
      }

      console.log(`Product with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Invalid ID or MongoDB error:", error.message);
    }
  });

// UPDATE
program
  .command("update")
  .description("Update a product by its ID")
  .argument("<id>", "Product ID")
  .option("-n, --name <name>", "New product name")
  .option("-p, --price <price>", "New product price")
  .option("-s, --stock <stock>", "New stock quantity")
  .action(async (id, options) => {
    try {
      const updateFields: any = {};

      if (options.name) updateFields.name = options.name;
      if (options.price) updateFields.price = Number(options.price);
      if (options.stock) updateFields.stock = Number(options.stock);

      if (Object.keys(updateFields).length === 0) {
        console.log("No fields provided to update.");
        return;
      }

      const result = await db
        .collection("products")
        .updateOne({ _id: new ObjectId(id) }, { $set: updateFields });

      if (result.matchedCount === 0) {
        console.log(`No product found with ID ${id}`);
        return;
      }

      console.log(`Product with ID ${id} updated successfully.`);
    } catch (error) {
      console.error("Invalid ID or MongoDB error:", error.message);
    }
  });

// READ
program
  .command("list")
  .description("List all products")
  .action(async () => {
    const products = await db.collection("products").find().toArray();

    if (products.length === 0) {
      console.log("No products found.");
      return;
    }

    console.table(
      products.map(({ _id, name, price, stock, created_at }) => ({
        id: _id.toString(),
        name,
        price,
        stock,
        created_at,
      }))
    );
  });

program.hook("postAction", () => process.exit(0));
program.parse();
