import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_ACCESS_SECRET } from '#config';

export function isAuthenticated(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { accessToken: token } = req.cookies;

	if (!token) throw new Error('Not authenticated', { cause: 400 });

	try {
		const decoded = jwt.verify(token, JWT_ACCESS_SECRET) as jwt.JwtPayload;
		const user = {
			userId: decoded.sub!,
			roles: decoded.roles!,
		};

		req.user = user;
	} catch (error) {
		return next(new Error('Invalid access token.', { cause: 401 }));
	}

	next();
}
