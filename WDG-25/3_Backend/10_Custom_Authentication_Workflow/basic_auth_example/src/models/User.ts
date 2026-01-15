import { Schema, model } from 'mongoose';

const userSchema = new Schema(
	{
		firstName: { type: String, required: [true, 'First name is required'] },
		lastName: { type: String, required: [true, 'Last name is required'] },
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
			select: false,
		},
		roles: { type: [String], default: ['user'] },
	},
	{ timestamps: true }
);

export default model('User', userSchema);
