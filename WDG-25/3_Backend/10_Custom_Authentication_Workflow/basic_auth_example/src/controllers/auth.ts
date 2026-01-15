import { User } from '#models';
import type { Request, Response } from 'express';
import { checkPassword, hashPassword, createAccessToken } from '#utils';

export async function register(req: Request, res: Response) {
	const { firstName, lastName, password, email } = req.body;

	const hashedPassword = await hashPassword(password);

	const newUser = await User.create({
		firstName,
		lastName,
		password: hashedPassword,
		email,
	});

	const accessToken = createAccessToken({
		userId: newUser._id.toString(),
		roles: newUser.roles,
	});

	res.cookie('accessToken', accessToken);

	res.json({ user: newUser });
}

export async function login(req: Request, res: Response) {
	const { email, password } = req.body;

	const user = await User.findOne({ email }).select('+password');

	if (!user) return res.status(404).json({ message: 'User not found' });

	const isPasswordValid = checkPassword(password, user.password);
	if (!isPasswordValid) {
		return res.status(401).json({ message: 'Password not valid' });
	}

	const accessToken = createAccessToken({
		userId: user._id.toString(),
		roles: user.roles,
	});

	res.cookie('accessToken', accessToken);

	res.json({ user: user });
}

export async function logout(req: Request, res: Response) {
	res.clearCookie('accessToken');
	res.json({ message: 'successfully logged out' });
}
