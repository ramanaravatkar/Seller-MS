import jwt from 'jsonwebtoken';

const generateToken = (id: string) => {
  return jwt.sign({ sellerId: id }, process.env.JWT_SECRET || 'your_jwt_secret', {
    expiresIn: '1h',
  });
};

export default generateToken;
