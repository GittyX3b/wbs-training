import express, { type Request, type Response } from "express";
import { Post } from "#models";
import "#db";

type PostRequestBody = {
  title: string;
  content: string;
};

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("Server running and healthy");
});

app.get("/posts", async (_req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ data: posts });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts" });
  }
});

app.post(
  "/posts",
  async (req: Request<{}, {}, PostRequestBody>, res: Response) => {
    try {
      const post = await Post.create(req.body);
      res.status(201).json({ data: post });
    } catch (error) {
      res.status(400).json({ message: "Failed to create post" });
    }
  }
);

app.get("/posts/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ data: post });
  } catch {
    res.status(400).json({ message: "Invalid post id" });
  }
});

app.put(
  "/posts/:id",
  async (req: Request<{ id: string }, {}, PostRequestBody>, res: Response) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true, // return the updated document
          runValidators: true, // ensure schema validation
        }
      );

      if (!updatedPost)
        return res.status(404).json({ message: "Post not found" });

      res.status(200).json({ data: updatedPost });
    } catch {
      res.status(400).json({ message: "Failed to update post" });
    }
  }
);

app.delete(
  "/posts/:id",
  async (req: Request<{ id: string }>, res: Response) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
      if (!deletedPost)
        return res.status(404).json({ message: "Post not found" });

      res.status(200).json({ message: "Post deleted successfully" });
    } catch {
      res.status(400).json({ message: "Failed to delete post" });
    }
  }
);

app.listen(port, () => {
  console.log(`SERVER IS RUNNING => http://localhost:${port}`);
});
