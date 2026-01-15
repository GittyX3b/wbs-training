import { model, Schema } from 'mongoose';
import { Types } from 'mongoose';

const postSchema = new Schema(
  {
    title: { type: String, required: [true, 'Title is required'] },
    author: { type: String, required: [true, 'Author is required'] },
    userId: {
      type: String,
      required: [true, 'userId is required'],
      ref: 'User'
    },
    image: { type: String, required: [true, 'Cover image is required'] },
    content: { type: String, required: [true, 'Body is required'] }
  },
  {
    timestamps: true
  }
);

export default model('Post', postSchema);
