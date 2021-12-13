import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const validatePassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const generateToken = (payload) => {
  const token = jwt.sign(payload, 'secret', { expiresIn: '24h' });
  return token;
};
