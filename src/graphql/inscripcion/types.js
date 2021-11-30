import { gql } from 'apollo-server-core';

export const typesInscripcion = gql`
  type Inscripcion {
    proyecto: Proyecto!
    usuario: Usuario!
    estado: String!
    fechaIngreso: Date!
    fechaEgreso: Date!
  }

  type Query {
    obtenerInscripciones: [Inscripcion!]!
    inscripcionesProyecto(id: ID!): [Inscripcion!]!
    inscripcionesUsuario(id: ID!): [Inscripcion!]!
  }

  type Mutation {
    crearInscripcion(proyecto: ID!, usuario: ID!): Inscripcion!
    eliminarInscripcion(id: ID!): Inscripcion!
    editarInscripcion(
      id: ID!
      estado: String!
      fechaIngreso: Date!
      fechaEgreso: Date!
    ): Inscripcion!
  }
`;
