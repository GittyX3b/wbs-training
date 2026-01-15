import type { NextFunction, Request, Response } from 'express';

async function isAdmin(req: Request, res: Response, next: NextFunction) {
  if (hasUser(req)) {
    const { roles } = req.user;
    console.log(roles);

    if (roles.includes('admin')) {
      next();
    } else {
      throw new Error('Not authorized', { cause: { status: 403 } });
    }
  }
}

type jwtPayload = {
  id: string;
  roles: string[];
};

function hasUser(req: any): req is { user: jwtPayload } {
  return req.user !== undefined && Array.isArray(req.user.roles);
}

export default isAdmin;
