import { Router } from 'express';
import { validateZod } from '#middlewares';
import { createPost, deletePost, getAllPosts, getSinglePost, updatePost } from '#controllers';
import { postSchema } from '#schemas';

const postsRouter = Router();

postsRouter.route('/').get(getAllPosts).post(validateZod(postSchema), createPost);

postsRouter.route('/:id').get(getSinglePost).put(validateZod(postSchema), updatePost).delete(deletePost);

export default postsRouter;
