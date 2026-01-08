import { userInputSchema, postInputSchema } from '#schemas';
import type { Request, Response, NextFunction } from 'express';
import { z, ZodObject } from 'zod/v4';

export function validateUser(req: Request, res: Response, next: NextFunction) {
  const { data, error, success } = userInputSchema.safeParse(req.body);

  if (!success) {
    next(new Error(z.prettifyError(error), { cause: 400 }));
  } else {
    req.body = data;
    next();
  }
}

export function validatePost(req: Request, res: Response, next: NextFunction) {
  const { data, error, success } = postInputSchema.safeParse(req.body);

  if (!success) {
    next(new Error(z.prettifyError(error), { cause: 400 }));
  } else {
    req.body = data;
    next();
  }
}

export function validateBodyZod(zodSchema: ZodObject) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { data, error, success } = zodSchema.safeParse(req.body);

    if (!success) {
      next(new Error(z.prettifyError(error), { cause: 400 }));
    } else {
      req.body = data;
      next();
    }
  };
}
