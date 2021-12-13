import { gql } from 'apollo-server-core';

export const typesProyecto = gql`
  type Proyecto {
    _id: ID!
    nombre: String!
    objetivo: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    lider: String!
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
      lider: String!
    ): Proyecto!

    eliminarProyecto(id: ID!): Proyecto!

    editarProyecto(
      id: ID!
      nombre: String!
      objetivo: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      lider: String!
      estado: String!
      fase: String!
    ): Proyecto!
  }
`;
