import mongoose, { Document, Model, Schema } from "mongoose";

// Interface para tipagem do relatório
export interface IRelatorio extends Document {
  _id: string;
  date: Date; // Data do relatório
  funcionarioId: string; // ID do funcionário
  nomeFuncionario: string; // Nome do funcionário
  horasTrabalhadas: number; // Total de horas do período
  tipoRelatorio: "admin"; // Tipo de relatório
}

// Schema do Mongoose
const RelatorioSchema: Schema<IRelatorio> = new Schema(
  {
    date: { type: Date, required: true },
    funcionarioId: { type: String, required: true },
    nomeFuncionario: { type: String, required: true },
    horasTrabalhadas: { type: Number, required: true },
    tipoRelatorio: { type: String, enum: ["admin"], required: true },
  },
  {
    timestamps: true, // adiciona createdAt e updatedAt automaticamente
  }
);

// Exporta o modelo
const Relatorio: Model<IRelatorio> =
  mongoose.models.Relatorio ||
  mongoose.model<IRelatorio>("Relatorio", RelatorioSchema);

export default Relatorio;
