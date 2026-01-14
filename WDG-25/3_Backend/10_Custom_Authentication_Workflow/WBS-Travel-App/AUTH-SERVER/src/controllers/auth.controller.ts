import type { RequestHandler } from 'express';
import { RefreshToken, User } from '#models';
import {
  validateRegisterData,
  validateLoginData,
  encryptPassword,
  checkPassword,
  createAccessToken,
  createRefreshToken
} from '#utils';
import { REFRESH_TOKEN_TTL } from '#config';

export const register: RequestHandler = async (req, res) => {
  /* Validate input values using zod */
  if (!validateRegisterData(req.body))
    throw new Error('Recieved data is not matching registerSchema', { cause: 400 });

  /* Deconstruct input to variables */
  const { firstName, lastName, email, password, confirmPassword, roles, isActive } = req.body;

  /* Check if email already exists */
  const existingUser = await User.findOne({ email: email });
  if (existingUser) throw new Error('User email already exists', { cause: 409 });

  /* Hash password */
  const hashedPassword = await encryptPassword(password);

  /* Create user in db */
  const newUser = await User.create({
    firstName,
    lastName,
    password: hashedPassword,
    email,
    roles,
    isActive
  });

  /* Get user data for response from db (without password) */
  const resUser = await User.findOne({ email: email });
  if (!resUser) throw new Error('Created user could not be fetched from db', { cause: 400 });

  /* Create tokens */
  const accessToken = createAccessToken({
    userId: resUser._id.toString(),
    roles: resUser.roles
  });

  const refreshToken = createRefreshToken(resUser._id.toString());

  /* Save token */
  const newRefreshToken = RefreshToken.create(refreshToken);

  /* Set cookies */
  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production'
  });

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: REFRESH_TOKEN_TTL * 1000
  });

  /* Response to client */
  res.status(201).json({ message: 'User successfully registered', createdUser: resUser });
};

export const login: RequestHandler = async (req, res) => {
  if (!validateLoginData(req.body))
    throw new Error('Recieved data is not matching loginSchema', { cause: 400 });

  const { email, password } = req.body;

  /* Get user from db */
  const existingUser = await User.findOne({ email: email }).select('+password');
  if (!existingUser) throw new Error('Incorrect credentials. User does not exist', { cause: 404 });

  /* Validate password */
  const passValid = await checkPassword(password, existingUser.password);
  if (!passValid) throw new Error('Incorrect credentials. Password incorrect');

  /* Create tokens */
  const accessToken = createAccessToken({
    userId: existingUser._id.toString(),
    roles: existingUser.roles
  });

  const refreshToken = createRefreshToken(existingUser._id.toString());

  /* Save token */
  const newRefreshToken = RefreshToken.create(refreshToken);

  /* Set cookies */
  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production'
  });

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: REFRESH_TOKEN_TTL * 1000
  });

  /* Respond tio client */
  res.status(200).json({ message: 'User logged in' });
};

export const refresh: RequestHandler = async (req, res) => {
  // TODO: Implement access token refresh and refresh token rotation
  // Get the refresh token from the cookies and verify it
  // Look up the refresh token in the database, throw and error, if it canot be found
  // delete the old refresh token, look up the user and issue new tokens
  // store the new refresh token in your db and send both access and refresh token via cookies
};

export const logout: RequestHandler = async (req, res) => {
  // TODO: Implement logout by removing the tokens
  // Delete the refresh token from your database
  // Clear both cookies
  // A longer living access token, or a token in a higher risk use case would need to be put on a token blacklist - another entry in your db - and checked on validation
  // Since our access tokens are valid for a couple of minutes the risk here is acceptable

  /* Get token from cookies */
  const { accessToken, refreshToken } = req.cookies;
  if (!accessToken) throw new Error('No access token found in cookie', { cause: 404 });
  if (!refreshToken) throw new Error('No refresh token found in cookie', { cause: 404 });

  console.log(refreshToken);
};

export const me: RequestHandler = async (req, res, next) => {
  // TODO: Implement a me handler
  // Get the access token and use it to retrieve the user's data
  // Make sure that the token is valid and not expired
  // When expired, send a WWW-Authenticate Header with a 'token_expired' payload

  /* Get access token from cookie */
  const { accessToken } = req.cookies;
  console.log(accessToken);
};
