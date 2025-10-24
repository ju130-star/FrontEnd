
import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUsuario extends Document {
  _id: string;
  nome: string;
  email: string;
  senha?: string;
  tipoUsuario: "funcionario" | "admin";
  compareSenha(senhaUsuario: string): Promise<boolean>;
}

const UsuarioSchema: Schema<IUsuario> = new Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true, select: false },
    tipoUsuario: {
      type: String,
      enum: ["funcionario", "admin"],
      required: true,
      default: "funcionario",
    },
  },
  { timestamps: true }
);

UsuarioSchema.pre<IUsuario>("save", async function (next) {
  if (!this.isModified("senha") || !this.senha) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.senha = await bcrypt.hash(this.senha, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

UsuarioSchema.methods.compareSenha = async function (
  senhaUsuario: string
): Promise<boolean> {
  // this.senha pode estar undefined se o campo não foi selecionado
  if (!this.senha) return false;
  return bcrypt.compare(senhaUsuario, this.senha);
};

const Usuario: Model<IUsuario> =
  mongoose.models.Usuario || mongoose.model<IUsuario>("Usuario", UsuarioSchema);

export default Usuario;

