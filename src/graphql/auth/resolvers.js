import { encryptPassword, generateToken, validatePassword } from '../../utils/authUtils.js';
import { modeloUsuario } from '../usuario/usuario.js';
import bcrypt from 'bcrypt';

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

    login: async (_, args) => {
      const usuario = await modeloUsuario.findOne({ correo: args.correo });
      if (await validatePassword(args.password, usuario.password)) {
        return {
          token: generateToken({
            _id: usuario._id,
            nombre: usuario.nombre,
            cedula: usuario.cedula,
            correo: usuario.correo,
            rol: usuario.rol,
            estado: usuario.estado,
          }),
        };
      } else {
        return {
          error: 'Contraseña incorrecta',
        };
      }
    },
  },
};
