import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';
import dotenv from 'dotenv';
import { conectarBd } from './database.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const server = new ApolloServer({ typeDefs, resolvers });

app.listen({ port: 4000 }, async () => {
  console.log('Server on port 4000');
  conectarBd();
  await server.start();
  server.applyMiddleware({ app });
});
