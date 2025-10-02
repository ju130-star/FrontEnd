import Equipamento, { IEquipamento } from "@/models/Equipamento";
import connectMongo from "@/services/mongodb";

//getAll
export const getAllEquipamento = async () => {
  await connectMongo(); //estabelece conexão com o BD
  const equipamentos = await Equipamento.find([]); //lista de todos os Equipamentos
  return equipamentos;
};
// getOne
export const getOneEquipamento = async (id: string) => {
  await connectMongo();
  const equipamento = await Equipamento.findById(id); //lista o Equipamento
  return equipamento;
};
// create
export const createEquipamento = async (data: Partial<IEquipamento>) => {
  await connectMongo();
  const novoEquipamento = new Equipamento(data); //cria o usuário
  // await novoEquipamento.save(); //salva o usuário no BD
  const novoEquipamentoId = novoEquipamento.save(); //salva o usuário no BD
  return novoEquipamentoId;
};

//update
export const updateEquipamento = async (id: string, data: Partial<IEquipamento>) => {
  await connectMongo();
  const EquipamentoAtualizado = await Equipamento.findByIdAndUpdate(id, data, {
    new: true,
  });
  return EquipamentoAtualizado;
};

//delete
export const deleteEquipamento = async (id: string) => {
  await connectMongo();
  await Equipamento.findByIdAndDelete(id);
};
