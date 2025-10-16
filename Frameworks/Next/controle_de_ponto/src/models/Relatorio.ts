//classe de modelagem de dados para Relatorio

import mongoose, { Document, Model, Schema } from "mongoose";

//atributos
export interface IRelatorio extends Document {
  _id: string;
  date: Date;
  funcionarioId: string;
  nomeFuncionario: string;
  horasTrabalhadas: number;
  tipoRelatorio: string;
}

//schema -> construtor
const RelatorioSchema: Schema<IRelatorio> = new Schema({
  date: { type: Date, required: true },
  funcionarioId: { type: String, required: true },
  nomeFuncionario: { type: String, required: true },
  horasTrabalhadas: { type: Number, required: true },
  tipoRelatorio: {
    type: String,
    enum: ["admin"],
    required: true,
  },
});

// Exporta o modelo corretamente
const Relatorio: Model<IRelatorio> =
  mongoose.models.Relatorio ||
  mongoose.model<IRelatorio>("Relatorio", RelatorioSchema);

export default Relatorio;
