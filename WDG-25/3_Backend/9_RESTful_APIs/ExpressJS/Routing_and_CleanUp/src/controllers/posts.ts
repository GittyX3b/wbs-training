import { type RequestHandler } from "express";
import { type PostType } from "#types";
import { Post } from "#models";

const getPosts: RequestHandler = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("userId", "firstName lastName email")
      .lean();
    res.json(posts);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

const createPost: RequestHandler = async (req, res) => {
  try {
    const { title, content, userId } = req.body as PostType;
    if (!title || !content || !userId)
      return res
        .status(400)
        .json({ error: "title, content, and userId are required" });
    const post = await Post.create<PostType>({ title, content, userId });
    const populatedPost = await post.populate(
      "userId",
      "firstName lastName email"
    );
    res.json(populatedPost);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

const getPostById: RequestHandler = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const post = await Post.findById(id).populate(
      "userId",
      "firstName lastName email"
    );
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

const updatePost: RequestHandler = async (req, res) => {
  try {
    const {
      body: { title, content, userId },
      params: { id },
    } = req;
    if (!title || !content || !userId)
      return res
        .status(400)
        .json({ error: "title, content, and userId are required" });

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ error: "Post not found" });

    post.title = title;
    post.content = content;
    post.userId = userId;
    await post.save();

    const populatedPost = await post.populate(
      "userId",
      "firstName lastName email"
    );
    res.json(populatedPost);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

const deletePost: RequestHandler = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const post = await Post.findByIdAndDelete(id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json({ message: "Post deleted" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export { getPosts, createPost, getPostById, updatePost, deletePost };
