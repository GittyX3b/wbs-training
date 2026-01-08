import { z } from 'zod/v4';
import { isValidObjectId, Types } from 'mongoose';

export const postInputSchema = z.strictObject({
  title: z.string({ error: 'Title must be a string' }).min(1, { message: 'Title is required' }),
  content: z.string({ error: 'Content must be a string' }).min(1, { message: 'Content is required' }),
  userId: z
    .string()
    .refine(val => isValidObjectId(val), { error: 'Not a valid ObjectId' })
    .transform(val => new Types.ObjectId(val))
});

export const postSchema = z.strictObject({
  _id: z.instanceof(Types.ObjectId),
  ...postInputSchema.shape,
  createdAt: z.date(),
  updatedAt: z.date(),
  __v: z.number()
});
