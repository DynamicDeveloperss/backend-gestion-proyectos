import { modeloUsuario } from './usuario.js';
import { encryptPassword } from '../../utils/authUtils.js';

export const resolversUsuario = {
  Query: {
    obtenerUsuarios: async () => {
      const usuarios = await modeloUsuario.find();
      return usuarios;
    },
  },

  Mutation: {
    crearUsuario: async (_, args) => {
      const password = await encryptPassword(args.password);
      const nuevoUsuario = await modeloUsuario.create({
        nombre: args.nombre,
        cedula: args.cedula,
        correo: args.correo,
        rol: args.rol,
        password: password,
      });
      return nuevoUsuario;
    },

    eliminarUsuario: async (_, args) => {
      /* 
      todo: cuando se elimina un usuario se deben elinar sus respectivos avances e inscripciones 
      */
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
        },
        { new: true }
      );
      return usuarioEditado;
    },
  },
};
