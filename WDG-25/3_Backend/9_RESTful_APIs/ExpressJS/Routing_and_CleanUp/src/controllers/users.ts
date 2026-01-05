import { type RequestHandler } from "express";
import { type UserType } from "#types";
import { User } from "#models";

const getUsers: RequestHandler = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

const createUser: RequestHandler = async (req, res) => {
  try {
    const { firstName, lastName, email, password, isActive } =
      req.body as UserType;
    if (!firstName || !lastName || !email || !password)
      return res.status(400).json({
        error: "firstName, lastName, email, and password are required",
      });
    const found = await User.findOne({ email });
    if (found) return res.status(400).json({ error: "User already exists" });
    const user = await User.create<UserType>({
      firstName,
      lastName,
      email,
      password,
      isActive,
    });
    res.json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

const getUserById: RequestHandler = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

const updateUser: RequestHandler = async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const { firstName, lastName, email } = body as UserType;
    if (!firstName || !lastName || !email)
      return res
        .status(400)
        .json({ error: "firstName, lastName, and email are required" });
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    await user.save();
    res.json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

const deleteUser: RequestHandler = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export { getUsers, createUser, getUserById, updateUser, deleteUser };
