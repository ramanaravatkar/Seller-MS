import { Request, Response } from 'express';
import User from '../models/user';
import { generateToken } from '../utils/jwtUtils';
import bcrypt from 'bcrypt';

export const signUp = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.status(201).json({ message: 'User created successfully' });
};

export const signIn = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = generateToken(user.toString());
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
