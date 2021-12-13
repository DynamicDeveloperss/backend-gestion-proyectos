import { gql } from 'apollo-server-express';

export const typesUsuario = gql`
  type Usuario {
    _id: ID!
    nombre: String!
    correo: String!
    cedula: String!
    rol: String!
    estado: String!
  }

  type Query {
    obtenerUsuarios: [Usuario!]!
    obtenerUsuario(_id: ID!): Usuario!
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      correo: String!
      cedula: String!
      rol: String!
      password: String!
    ): Usuario!
    eliminarUsuario(id: ID!): Usuario
    editarUsuario(
      id: ID!
      nombre: String!
      correo: String!
      cedula: String!
      estado: String!
    ): Usuario
  }
`;
