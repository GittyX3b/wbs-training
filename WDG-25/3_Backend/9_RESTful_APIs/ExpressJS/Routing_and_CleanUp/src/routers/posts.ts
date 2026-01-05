import { Router } from "express";
import {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "#controllers";

const postRouter = Router();

postRouter.get("/", getPosts);
postRouter.post("/", createPost);
postRouter.get("/:id", getPostById);
postRouter.put("/", updatePost);
postRouter.delete("/:id", deletePost);

export { postRouter };
