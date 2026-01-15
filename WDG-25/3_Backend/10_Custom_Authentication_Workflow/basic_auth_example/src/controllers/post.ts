import { Post } from '#models';
import type { Request, Response } from 'express';
export async function createPost(req: Request, res: Response) {
	const { title, content } = req.body;
	const { user } = req;

	if (!title || !content)
		return res
			.status(400)
			.json({ message: 'title and content are required' });

	const newPost = await Post.create({
		title,
		content,
		userId: user.userId,
	});

	res.status(201).json(newPost);
}
