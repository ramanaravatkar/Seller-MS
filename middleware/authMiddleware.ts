import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwtUtils';  // Replace with your actual verification function

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    try {
      // const decoded = verifyToken(token);  // Replace with your actual decoding function
      // req.userId = decoded.userId;  // Type assertion or cast
      // next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
    }
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
};
