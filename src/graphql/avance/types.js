import { gql } from 'apollo-server-core';

export const typesAvance = gql`
  type Avance {
    proyecto: Proyecto!
    fecha: Date!
    descripcion: String!
    creador: Usuario!
  }

  type Query {
    obtenerAvances: [Avance!]!
    avancesProyecto(id: ID!): [Avance!]!
  }

  type Mutation {
    crearAvance(proyecto: ID!, descripcion: String!, creador: ID!): Avance!
    eliminarAvance(id: ID!): Avance!
    editarAvance(id: ID!, descripcion: String!): Avance!
  }
`;
