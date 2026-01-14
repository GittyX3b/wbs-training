import { Schema, model } from 'mongoose';
import { REFRESH_TOKEN_TTL } from '#config';

const refreshTokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    expireAt: {
      type: Date,
      default: () => new Date(Date.now() + REFRESH_TOKEN_TTL * 1000),
      expires: REFRESH_TOKEN_TTL
    }
  },
  {
    timestamps: { createdAt: true, updatedAt: false }
  }
);

const RefreshToken = model('RefreshToken', refreshTokenSchema);

export default RefreshToken;
