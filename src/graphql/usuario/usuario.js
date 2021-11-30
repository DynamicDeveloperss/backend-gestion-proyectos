import pkg from 'mongoose';
const { Schema, model } = pkg;

const schemaUsuario = new Schema(
  {
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    cedula: { type: String, required: true, unique: true },
    rol: { type: String, required: true },
    estado: { type: String, default: 'Pendiente' },
    inscripciones: [{ type: Schema.Types.ObjectId, ref: 'Inscripcione' }],
  },
  { timestamps: false, versionKey: false }
);

export default model('Usuario', schemaUsuario);
