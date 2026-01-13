import type { RequestHandler } from 'express';
import { isValidObjectId } from 'mongoose';
import { Post } from '#models';

export const getAllPosts: RequestHandler = async (_req, res) => {
  const posts = await Post.find().lean().populate('author');
  res.json(posts);
};

export const createPost: RequestHandler = async (req, res) => {
  const newPost = await (await Post.create(req.body)).populate('author');
  res.status(201).json(newPost);
};

export const getSinglePost: RequestHandler = async (req, res) => {
  const {
    params: { id }
  } = req;
  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });
  const post = await Post.findById(id).lean().populate('author');
  if (!post) throw new Error(`Post with id of ${id} doesn't exist`, { cause: 404 });
  res.send(post);
};

export const updatePost: RequestHandler = async (req, res) => {
  const {
    params: { id }
  } = req;
  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });
  const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true }).populate('author');
  if (!updatedPost) throw new Error(`Post with id of ${id} doesn't exist`, { cause: 404 });
  res.json(updatedPost);
};

export const deletePost: RequestHandler = async (req, res) => {
  const {
    params: { id }
  } = req;
  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });
  const deletedPost = await Post.findByIdAndDelete(id).populate('author');
  if (!deletedPost) throw new Error(`Post with id of ${id} doesn't exist`, { cause: 404 });
  res.json({ success: `Post with id of ${id} was deleted` });
};
