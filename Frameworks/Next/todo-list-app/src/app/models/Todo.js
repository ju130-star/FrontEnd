import mongoose from "mongoose";
import { Script } from "vm";

//Construtor de um obj da coleção MongoDB_Tarefas
const TodoSchema = new mongoose.Schema({
  title: {
    type: Script,
    required: [true, "O título é obrigatório"], // adiciona mensagem de erro
    trim: true, // remove espaços em branco no início e no fim
    maxlength: [100, "O título não pode exceder 100 caracteres"], // adiciona mensagem de erro
  },
  concluida: {
    type: Boolean,
    default: false, //o padrão é que seja falso inicialmente
  },
  criadaEm: {
    type: Date,
    default: Date.now, //define a data atual como padrão
  },
});

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
//Cria um modelo Todo Caso já não exista
//se o modelo já existir, usa o que já existe (mongoose.models.Todo)
//se não existir, cria um novo modelo (mongoose.model('Todo', TodoSchema))
