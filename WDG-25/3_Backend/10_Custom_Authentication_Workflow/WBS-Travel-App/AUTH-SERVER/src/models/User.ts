import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    // TODO:  make sure that the password is hashed before saving
    firstName: { type: String, required: [true, 'First name is required'], trim: true },
    lastName: { type: String, required: [true, 'Last name ist required'], trim: true },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email must be unique'],
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      select: false,
      trim: true
    },
    roles: {
      type: [String],
      default: ['User']
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: { createdAt: true, updatedAt: false }
  }
);

const User = model('User', userSchema);

export default User;
