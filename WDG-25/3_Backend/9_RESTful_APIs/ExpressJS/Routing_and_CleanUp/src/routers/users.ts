import { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "#controllers";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUser);
userRouter.get("/:id", getUserById);
userRouter.put("/", updateUser);
userRouter.delete("/:id", deleteUser);

export { userRouter };
