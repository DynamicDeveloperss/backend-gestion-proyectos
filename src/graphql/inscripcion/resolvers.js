import { modeloInscripcion } from './inscripcion.js';

export const resolversInscripcion = {
  Query: {
    obtenerInscripciones: async () => {
      const inscripciones = await modeloInscripcion.find().populate('proyecto').populate('usuario');
      return inscripciones;
    },
    inscripcionesProyecto: async (_, args) => {
      const inscripcionesProyecto = await modeloInscripcion
        .findById({ _id: args.id })
        .populate('proyecto')
        .populate('usuario');
      return inscripcionesProyecto;
    },
    inscripcionesUsuario: async (_, args) => {
      const inscripcionesUsuario = await modeloInscripcion
        .findById({ _id: args.id })
        .populate('proyecto')
        .populate('usuario');
      return inscripcionesUsuario;
    },
  },

  Mutation: {
    crearInscripcion: async (_, args) => {
      const nuevaInscripcion = await modeloInscripcion.create({
        proyecto: args.proyecto,
        usuario: args.usuario,
      });
      return nuevaInscripcion;
    },
    eliminarInscripcion: async (_, args) => {
      const inscripcionEliminada = await modeloInscripcion.findByIdAndDelete({ _id: args.id });
      return inscripcionEliminada;
    },
    editarInscripcion: async (_, args) => {
      const inscripcionEditada = await modeloInscripcion.findByIdAndUpdate(
        { _id: args.id },
        {
          estado: args.estado,
          fechaIngreso: args.fechaIngreso,
          fechaEgreso: args.fechaEgreso,
        }
      );
      return inscripcionEditada;
    },
  },
};
