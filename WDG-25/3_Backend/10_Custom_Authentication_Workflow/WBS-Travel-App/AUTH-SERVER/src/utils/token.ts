import jwt from 'jsonwebtoken';
import { randomBytes } from 'crypto';
import { ACCESS_JWT_SECRET, REFRESH_TOKEN_TTL } from '#config';

/* Access token */
type jwtPayload = {
  userId: string;
  roles: string[];
};

export function createAccessToken(payload: jwtPayload) {
  const accessToken = jwt.sign({ sub: payload.userId, roles: payload.roles }, ACCESS_JWT_SECRET, {
    expiresIn: '5min'
  });
  return accessToken;
}

export function checkAccessToken(token: string) {
  const payload = jwt.verify(token, ACCESS_JWT_SECRET);
  return payload;
}

/* Refresh token */
export function createRefreshToken(userId: string) {
  const token = randomBytes(32).toString('hex');
  const expireAt = new Date(Date.now() + REFRESH_TOKEN_TTL * 1000);

  return {
    token,
    userId,
    expireAt
  };
}
