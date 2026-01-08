import type { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Time', Date.now());
  console.log(req.url);
  console.log(req.method);

  req.customProperty = 'Hello World';

  req.user = {
    id: 1,
    firstName: 'Karl',
    lastName: 'Karlsen'
  };
  next();
}

export function userLogger(req: Request, res: Response, next: NextFunction) {
  console.log('logging from user routes');
  next();
}
