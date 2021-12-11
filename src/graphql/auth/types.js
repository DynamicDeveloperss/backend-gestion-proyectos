import { gql } from 'apollo-server-express';

export const typesAuth = gql`
  type Login {
    token: String!
    error: String!
  }

  type Query {
    login: Login
  }
`;
