import bcrypt from 'bcrypt';

export const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const validatePassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};
