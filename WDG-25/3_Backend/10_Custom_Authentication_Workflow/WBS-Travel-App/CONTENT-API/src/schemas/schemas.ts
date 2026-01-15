import { z } from 'zod/v4';

export const postSchema = z.object({
  title: z.string('Title must be a string').min(1, 'Title is required'),
  image: z.string('Image must be a string').min(1, 'Image is required'),
  content: z.string('Content must be a string').min(1, 'Content is required'),
  author: z.string('Author must be a string').min(1, 'Author is required')
});
