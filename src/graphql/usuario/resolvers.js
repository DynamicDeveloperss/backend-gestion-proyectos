import { modeloUsuario } from './usuario.js';

export const resolversUsuario = {
  Query: {
    obtenerUsuarios: async () => {
      const usuarios = await modeloUsuario.find();
      return usuarios;
    },
  },

  Mutation: {
    crearUsuario: async (_, args) => {
      const nuevoUsuario = await modeloUsuario.create({
        nombre: args.nombre,
        cedula: args.cedula,
        correo: args.correo,
        rol: args.rol,
      });
      return nuevoUsuario;
    },

    eliminarUsuario: async (_, args) => {
      const usuarioEliminado = await modeloUsuario.findOneAndDelete({ _id: args.id });
      return usuarioEliminado;
    },

    editarUsuario: async (_, args) => {
      const usuarioEditado = await modeloUsuario.findOneAndUpdate(
        { _id: args.id },
        {
          nombre: args.nombre,
          cedula: args.cedula,
          correo: args.correo,
          rol: args.rol,
          estado: args.estado,
        }
      );
      return usuarioEditado;
    },
  },
};
