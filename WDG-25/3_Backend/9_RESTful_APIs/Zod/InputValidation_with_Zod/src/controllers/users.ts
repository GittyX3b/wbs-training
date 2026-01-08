import { type RequestHandler } from "express";
import { User } from "#models";
import type { userInputSchema, userSchema } from "#schemas";
import { z } from "zod/v4";

type UserInputDTO = z.infer<typeof userInputSchema>;
type UserDTO = z.infer<typeof userSchema>;

export const getUsers: RequestHandler<{}, UserDTO[]> = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const createUser: RequestHandler<{}, UserDTO, UserInputDTO> = async (
  req,
  res
) => {
  const found = await User.findOne({ email: req.body.email });
  if (found) throw new Error("User already exists", { cause: 400 });

  const user = await User.create<UserInputDTO>(req.body);
  res.json(user);
};

export const getUserById: RequestHandler<{ id: string }, UserDTO> = async (
  req,
  res
) => {
  const {
    params: { id },
  } = req;
  const user = await User.findById(id);
  if (!user) throw new Error("User not found", { cause: 404 });
  res.json(user);
};

export const updateUser: RequestHandler<
  { id: string },
  UserDTO,
  UserInputDTO
> = async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const { firstName, lastName, email, isActive } = body;
  const user = await User.findById(id);
  if (!user) throw new Error("User not found", { cause: 404 });
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.isActive = isActive;
  await user.save();
  res.json(user);
};

export const deleteUser: RequestHandler<{ id: string }> = async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new Error("User not found", { cause: 404 });
  res.json({ message: "User deleted" });
};
