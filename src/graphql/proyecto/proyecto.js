import pkg from 'mongoose';
const { Schema, model } = pkg;

const schemaProyecto = new Schema(
  {
    nombre: { type: String, unique: true, required: true },
    objetivo: { type: String, required: true },
    presupuesto: { type: Number, required: true },
    fechaInicio: { type: Date, required: true },
    fechaFin: { type: Date, required: true },
    lider: { type: String, required: true },
    estado: { type: String, default: 'Inactivo' },
    fase: { type: String, default: 'Indefinida' },
    // inscripciones: [{ type: Schema.Types.ObjectId, ref: 'Inscripcione' }],
    // avances: [{ type: Schema.Types.ObjectId, ref: 'Avance' }],
  },
  { timestamps: false, versionKey: false }
);

export const modeloProyecto = model('Proyecto', schemaProyecto);
