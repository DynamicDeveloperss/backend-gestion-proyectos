import { modeloProyecto } from './proyecto.js';

export const resolversProyecto = {
  Query: {
    obtenerProyectos: async () => {
      const proyectos = await modeloProyecto.find();
      return proyectos;
    },
  },

  Mutation: {
    crearProyecto: async (_, args) => {
      const nuevoProyecto = await modeloProyecto.create({
        nombre: args.nombre,
        objetivo: args.objetivo,
        presupuesto: args.presupuesto,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        lider: args.lider,
      });
      return nuevoProyecto;
    },

    eliminarProyecto: async (_, args) => {
      /*
        todo: funcion para eliminar las inscripciones y avances asociados a un proyecto
        */
      const proyectoEliminado = await modeloProyecto.findByIdAndDelete({ _id: args.id });
      return proyectoEliminado;
    },

    editarProyecto: async (_, args) => {
      const poryectoEditado = await modeloProyecto.findByIdAndUpdate(
        { _id: args.id },
        {
          nombre: args.nombre,
          objetivo: args.objetivo,
          presupuesto: args.presupuesto,
          fechaInicio: args.fechaInicio,
          fechaFin: args.fechaFin,
          lider: args.lider,
          estado: args.estado,
          fase: args.fase,
        },
        { new: true }
      );
      return poryectoEditado;
    },
  },
};
