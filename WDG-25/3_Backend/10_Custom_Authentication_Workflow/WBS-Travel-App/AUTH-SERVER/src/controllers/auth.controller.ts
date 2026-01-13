import type { RequestHandler } from 'express';
import { User } from '#models';
import { encryptPassword, checkPassword, createAccessToken, validateInputData } from '#utils';

export const register: RequestHandler = async (req, res) => {
  // TODO:  Create a refresh token, put it in res.cookie and store it in db

  /* Validate input values using zod */
  if (!validateInputData(req.body))
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
  /* Create tokens */
  const accessToken = createAccessToken({
    userId: newUser._id.toString(),
    roles: newUser.roles
  });

  /* Set cookies */
  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production'
  });

  /* Response to client */
  res.status(201).json({ message: 'User successfully registered' });
};

export const login: RequestHandler = async (req, res) => {
  // TODO: Implement user login
  // Check if the user exists in the database
  // Compare the password from the request with the hash in your db
  // Send an Error "Incorrect credentials" if either no user is found (invalid email) or the password is incorrect
  // Issue tokens and put them into cookies
  // Also store the refresh token in your db
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
  // Get the tokens from the cookies
  // Delete the refresh token from your database
  // Clear both cookies
  // A longer living access token, or a token in a higher risk use case would need to be put on a token blacklist - another entry in your db - and checked on validation
  // Since our access tokens are valid for a couple of minutes the risk here is acceptable
};

export const me: RequestHandler = async (req, res, next) => {
  // TODO: Implement a me handler
  // Get the access token and use it to retrieve the user's data
  // Make sure that the token is valid and not expired
  // When expired, send a WWW-Authenticate Header with a 'token_expired' payload
};
