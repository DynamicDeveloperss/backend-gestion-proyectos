import { gql } from 'apollo-server-express';

export const typesAuth = gql`
  type Token {
    token: String
    error: String
  }
  type Mutation {
    registro(
      nombre: String!
      correo: String!
      cedula: String!
      rol: String!
      password: String!
    ): Token!

    login(correo: String!, password: String!): Token!
  }
`;
