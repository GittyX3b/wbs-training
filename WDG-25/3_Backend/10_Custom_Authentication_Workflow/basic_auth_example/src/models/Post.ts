import { Schema, model } from 'mongoose';

const postSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: [true, 'User ID is required'],
	},
});

export default model('Post', postSchema);
