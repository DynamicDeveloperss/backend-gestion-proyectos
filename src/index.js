import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';

const app = express();
app.use(cors());
app.use(express.json());

const server = new ApolloServer({ typeDefs, resolvers });

app.listen({ port: 4000 }, async () => {
  console.log('Server on port 4000');
  await server.start();
  server.applyMiddleware({ app });
});
