import { gql } from 'apollo-server-core';
import { typesUsuario } from './usuario/types.js';

const tiposGlobales = gql`
  scalar Date
`;

export const typeDefs = [tiposGlobales, typesUsuario];
