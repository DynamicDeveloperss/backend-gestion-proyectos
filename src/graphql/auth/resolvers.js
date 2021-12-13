import { encryptPassword, generateToken } from '../../utils/authUtils.js';
import { modeloUsuario } from '../usuario/usuario.js';

export const resolversAuth = {
  Mutation: {
    registro: async (_, args) => {
      const password = await encryptPassword(args.password);
      const nuevoUsuario = await modeloUsuario.create({
        nombre: args.nombre,
        cedula: args.cedula,
        correo: args.correo,
        rol: args.rol,
        password: password,
      });
      console.log(nuevoUsuario);
      return {
        token: generateToken({
          _id: nuevoUsuario._id,
          nombre: nuevoUsuario.nombre,
          cedula: nuevoUsuario.cedula,
          correo: nuevoUsuario.correo,
          rol: nuevoUsuario.rol,
          estado: nuevoUsuario.estado,
        }),
      };
    },
  },
};
