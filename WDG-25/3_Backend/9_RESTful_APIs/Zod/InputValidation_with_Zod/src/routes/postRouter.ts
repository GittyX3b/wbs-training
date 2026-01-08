import { Router } from "express";
import {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "#controllers";
import { authMiddleWare, validateBodyZod } from "#middlewares";
import { postInputSchema } from "#schemas";

const postRouter = Router();

postRouter.get("/", getPosts);
postRouter.post(
  "/",
  validateBodyZod(postInputSchema),
  authMiddleWare,
  createPost
);
postRouter.get("/:id", getPostById);
postRouter.put(
  "/:id",
  validateBodyZod(postInputSchema),
  authMiddleWare,
  updatePost
);
postRouter.delete("/:id", authMiddleWare, deletePost);

//alternative
// postRouter.route('/').get(getPosts).post(createPost);
// postRouter.route('/:id').get(getPostById).put(updatePost).delete(deletePost);

export default postRouter;
