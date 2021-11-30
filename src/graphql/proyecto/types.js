import { gql } from 'apollo-server-core';

export const typesProyecto = gql`
  type Proyecto {
    nombre: String!
    objetivo: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    lider: ID!
    estado: String!
    fase: String!
  }

  type Query {
    obtenerProyectos: [Proyecto!]!
  }

  type Mutation {
    crearProyecto(
      nombre: String!
      objetivo: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      lider: ID!
    ): Proyecto!

    eliminarProyecto(id: ID!): Proyecto!

    editarProyecto(
      nombre: String!
      objetivo: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      lider: ID!
      estado: String!
      fase: String!
    ): Proyecto!
  }
`;
