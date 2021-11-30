import { gql } from 'apollo-server-core';
import { typesUsuario } from './usuario/types.js';
import { typesProyecto } from './proyecto/types.js';

const tiposGlobales = gql`
  scalar Date
`;

export const typeDefs = [tiposGlobales, typesUsuario, typesProyecto];
