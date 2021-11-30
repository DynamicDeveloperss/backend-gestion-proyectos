import { modeloAvance } from './avance.js';

export const resolversAvance = {
  Query: {
    obtenerAvances: async () => {
      const avances = await modeloAvance.find().populate('proyecto').populate('creador');
      return avances;
    },
    avancesProyecto: async (_, args) => {
      const avancesProyecto = await modeloAvance
        .findById({ _id: args.id })
        .populate('proyecto')
        .populate('creador');
      return avancesProyecto;
    },
  },

  Mutation: {
    crearAvance: async (_, args) => {
      const nuevoAvance = await modeloAvance.create({
        proyecto: args.proyecto,
        creador: args.creador,
        descripcion: args.descripcion,
      });
      return nuevoAvance;
    },
    eliminarAvance: async (_, args) => {
      const avanceEliminado = await modeloAvance.findByIdAndDelete({ _id: args.id });
      return avanceEliminado;
    },
    editarAvance: async (_, args) => {
      const avanceEditado = await modeloAvance.findByIdAndUpdate(
        { _id: args.id },
        {
          descripcion: args.descripcion,
        }
      );
      return avanceEditado;
    },
  },
};
