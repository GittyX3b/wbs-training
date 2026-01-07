import { Router } from "express";
import {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "#controllers";
import { authMiddleWare } from "#middleware";

const postRouter = Router();

postRouter.get("/", getPosts);
postRouter.post("/", authMiddleWare, createPost);
postRouter.get("/:id", getPostById);
postRouter.put("/:id", authMiddleWare, updatePost);
postRouter.delete("/:id", authMiddleWare, deletePost);

export { postRouter };
