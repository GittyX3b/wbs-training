import { type RequestHandler } from "express";
import { Post } from "#models";
import type { postInputSchema, postSchema } from "#schemas";
import { z } from "zod/v4";

type PostInputDTO = z.infer<typeof postInputSchema>;
type PostDTO = z.infer<typeof postSchema>;

export const getPosts: RequestHandler<{}, PostDTO[]> = async (req, res) => {
  const posts = await Post.find()
    .populate("userId", "firstName lastName email")
    .lean();
  res.json(posts);
};

export const createPost: RequestHandler<{}, PostDTO, PostInputDTO> = async (
  req,
  res
) => {
  const post = await Post.create<PostInputDTO>(req.body);
  const populatedPost = await post.populate(
    "userId",
    "firstName lastName email"
  );

  res.json(populatedPost);
};

export const getPostById: RequestHandler<{ id: string }, {}, PostDTO> = async (
  req,
  res
) => {
  const {
    params: { id },
  } = req;
  const post = await Post.findById(id).populate(
    "userId",
    "firstName lastName email"
  );
  if (!post) throw new Error("Post not found", { cause: 404 });
  res.json(post);
};

export const updatePost: RequestHandler<
  { id: string },
  PostDTO,
  PostInputDTO
> = async (req, res) => {
  const {
    body: { title, content, userId },
    params: { id },
  } = req;

  const post = await Post.findById(id);
  if (!post) throw new Error("Post not found", { cause: 404 });

  post.title = title;
  post.content = content;
  post.userId = userId;
  await post.save();

  const populatedPost = await post.populate(
    "userId",
    "firstName lastName email"
  );
  res.json(populatedPost);
};

export const deletePost: RequestHandler<{ id: string }> = async (req, res) => {
  const {
    params: { id },
  } = req;
  const post = await Post.findByIdAndDelete(id);
  if (!post) throw new Error("Post not found", { cause: 404 });
  res.json({ message: "Post deleted" });
};
