import type { Request, Response, NextFunction } from 'express';
export function authMiddleWare(req: Request, res: Response, next: NextFunction) {
  console.log('authenticated?');
  next();
}
