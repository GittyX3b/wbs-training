import { Router } from 'express';
import { authenticate, validateZod } from '#middlewares';
import { createPost, deletePost, getAllPosts, getSinglePost, updatePost } from '#controllers';
import { postSchema } from '#schemas';

const postsRouter = Router();

postsRouter.route('/').get(getAllPosts).post(validateZod(postSchema), authenticate, createPost);

postsRouter
  .route('/:id')
  .get(getSinglePost)
  .put(validateZod(postSchema), authenticate, updatePost)
  .delete(authenticate, deletePost);

export default postsRouter;
