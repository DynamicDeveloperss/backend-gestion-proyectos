import { resolversUsuario } from './usuario/resolvers.js';
import { resolversProyecto } from './proyecto/resolvers.js';
import { resolversInscripcion } from './inscripcion/resolvers.js';
import { resolversAvance } from './avance/resolvers.js';

export const resolvers = [
  resolversUsuario,
  resolversProyecto,
  resolversInscripcion,
  resolversAvance,
];
