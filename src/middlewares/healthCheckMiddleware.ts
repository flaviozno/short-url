import { Request, Response, NextFunction } from 'express';

const healthCheckMiddleware = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ status: 'ok' });
  };
  
  export default healthCheckMiddleware;