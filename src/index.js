import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

const app = express();
app.use(cors());
app.use(express.json());

app.listen({ port: 4000 }, () => {
  console.log('Server on port 4000');
});
