declare global {
  namespace Express {
    export interface Request {
      customProperty?: string;
      user: {
        id: number;
        firstName: string;
        lastName: string;
      };
    }
  }
}

export {};
