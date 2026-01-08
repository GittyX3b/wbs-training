import { Router } from 'express';
import { getUsers, createUser, getUserById, updateUser, deleteUser } from '#controllers';
import { userLogger, validateBodyZod } from '#middlewares';
import { validateUser } from '#middlewares';
import { userInputSchema } from '#schemas';

const userRouter = Router();

//route level middleware
userRouter.use(userLogger);

userRouter.get('/', getUsers);
// userRouter.post('/', validateUser, createUser);
userRouter.post('/', validateBodyZod(userInputSchema), createUser);
userRouter.get('/:id', getUserById);
userRouter.put('/:id', validateBodyZod(userInputSchema), updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;
