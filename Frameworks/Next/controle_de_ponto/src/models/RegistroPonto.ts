import mongoose, { Document, Model, Schema } from "mongoose";

// Enum para tipo de registro
export type TipoRegistro = "Entrada" | "Saída";

// Interface do registro de ponto
export interface IRegistroPonto extends Document {
  _id: string;
  funcionarioId: string;
  nomeFuncionario: string;
  dataHora: Date;
  tipoRegistro: TipoRegistro;
  horasTrabalhadas?: number; // opcional, calculada quando houver Entrada/Saída
}

// Schema do Mongoose
const RegistroPontoSchema: Schema<IRegistroPonto> = new Schema(
  {
    funcionarioId: { type: String, required: true },
    nomeFuncionario: { type: String, required: true },
    dataHora: { type: Date, required: true, default: Date.now },
    tipoRegistro: { type: String, enum: ["Entrada", "Saída"], required: true },
    horasTrabalhadas: { type: Number, default: 0, min: 0 },
  },
  {
    timestamps: true,
  }
);

// Exporta o modelo
const RegistroPonto: Model<IRegistroPonto> =
  mongoose.models.RegistroPonto ||
  mongoose.model<IRegistroPonto>("RegistroPonto", RegistroPontoSchema);

export default RegistroPonto;
