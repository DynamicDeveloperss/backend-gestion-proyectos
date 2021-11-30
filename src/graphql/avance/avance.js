import pkg from 'mongoose';
const { Schema, model } = pkg;

const schemaAvance = new Schema(
  {
    proyecto: { type: Schema.Types.ObjectId, required: true, ref: 'Proyecto' },
    fecha: { type: Date, default: Date.now },
    descripcion: { type: String, required: true },
    creador: { type: Schema.Types.ObjectId, required: true, ref: 'Usuario' },
  },
  { timestamps: false, versionKey: false }
);

export const modeloAvance = model('Avance', schemaAvance);
