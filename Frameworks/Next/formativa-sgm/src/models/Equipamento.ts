import mongoose, { Model, Schema } from "mongoose";

export interface IEquipamento extends Document {
  _id: string;
  modelo: string;
  marca: string;
  localizacao: string;
  status: string;
  numSerie: string;
}

const EquipamentoSchema: Schema<IEquipamento> = new Schema({
  modelo: { type: String, required: true },
  marca: { type: String, required: true },
  localizacao: { type: String, required: true},
  status: { type: String, 
    enum: ["Ativo", "Inativo"], 
    default: "Ativo",
 },
  numSerie: { type: String, required: true, unique: true },
});

const Equipamento: Model<IEquipamento> = mongoose.models.Equipamento //enviar para o banco
  || mongoose.model<IEquipamento>("Equipamento", EquipamentoSchema); //retornar do banco

export default Equipamento;
