import type { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

const secret = process.env.ACCESS_JWT_SECRET;

if (!secret) {
  console.log('Missing access token secret');
  process.exit(1);
}

const authenticate: RequestHandler = (req, _res, next) => {
  const { accessToken } = req.cookies;
  console.log(accessToken);

  if (!accessToken) throw new Error('Not authenticated', { cause: { status: 401 } });

  try {
    const decoded = jwt.verify(accessToken, secret) as jwt.JwtPayload;
    if (!decoded.sub) throw new Error();

    const user = {
      id: decoded.sub,
      roles: decoded.roles
    };

    req.user = user;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return next(new Error('Expired access token', { cause: { status: 401, code: 'ACCESS_TOKEN_EXPIRED' } }));
    }

    return next(new Error('Invalid access token', { cause: { status: 401 } }));
  }

  next();
};

export default authenticate;
