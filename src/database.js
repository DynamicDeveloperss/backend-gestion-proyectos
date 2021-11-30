import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const conectarBd = () => {
  mongoose
    .connect(process.env.URI_MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Database is connected');
    })
    .catch((error) => {
      console.log('error: ', error);
    });
};
