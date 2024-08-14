import User from '../models/user';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwtUtils';

export const signUp = async (username: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  return { message: 'User created successfully' };
};

export const signIn = async (username: string, password: string) => {
  const user = await User.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = generateToken(user.toString());
    return { token };
  } else {
    throw new Error('Invalid credentials');
  }
};
