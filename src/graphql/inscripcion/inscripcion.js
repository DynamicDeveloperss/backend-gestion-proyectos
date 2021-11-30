import pkg from 'mongoose';
const { Schema, model } = pkg;

const schemaIncripcion = new Schema(
  {
    proyecto: { type: Schema.Types.ObjectId, required: true, ref: 'Proyecto' },
    usuario: { type: Schema.Types.ObjectId, required: true, ref: 'Usuario' },
    estado: { type: String, default: 'Revisión' },
    fechaIngreso: { type: Date, default: Date.now },
    fechaEgreso: { type: Date, default: Date.now },
  },
  { timestamps: false, versionKey: false }
);

export default model('Inscripcione', schemaIncripcion);
