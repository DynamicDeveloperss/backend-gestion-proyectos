import { gql } from 'apollo-server-core';
import { typesUsuario } from './usuario/types.js';
import { typesProyecto } from './proyecto/types.js';
import { typesInscripcion } from './inscripcion/types.js';
import { typesAvance } from './avance/types.js';
import { typesAuth } from './auth/types.js';

const tiposGlobales = gql`
  scalar Date
`;

export const typeDefs = [tiposGlobales, typesUsuario, typesProyecto, typesInscripcion, typesAvance, typesAuth];
