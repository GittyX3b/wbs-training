import bcrypt from 'bcrypt';
import { JWT_ACCESS_SECRET } from '#config';
import jwt from 'jsonwebtoken';

type jwtPayload = {
	userId: string;
	roles: string[];
};

export async function hashPassword(password: string) {
	return bcrypt.hash(password, 10);
}

export async function checkPassword(password: string, hashedPassword: string) {
	return bcrypt.compare(password, hashedPassword);
}

export function createAccessToken(payload: jwtPayload) {
	const accessToken = jwt.sign(
		{ sub: payload.userId, roles: payload.roles },
		JWT_ACCESS_SECRET,
		{
			expiresIn: '10s',
		}
	);

	return accessToken;
}

export function checkAccessToken(token: string) {
	const payload = jwt.verify(token, JWT_ACCESS_SECRET);
	return payload;
}
