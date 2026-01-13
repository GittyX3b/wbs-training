import jwt from 'jsonwebtoken';
import { ACCESS_JWT_SECRET } from '#config';

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
