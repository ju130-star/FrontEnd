import OrdemServico, { IOrdemServico } from "@/models/OrdemServico";
import connectMongo from "@/services/mongodb";

// getAll
export const getAllOrdemservico = async () => {
  await connectMongo();
  const ordemservico = await OrdemServico.find({});
  return ordemservico;
};

// getOne
export const getOneOrdemservico = async (id: string) => {
  await connectMongo();
  const ordemservico = await OrdemServico.findById(id);
  return ordemservico;
};

// create
export const createOrdemservico = async (data: Partial<IOrdemServico>) => {
  await connectMongo();
  const novoOrdemservico = new OrdemServico(data);
  const novoOrdemservicoId = await novoOrdemservico.save();
  return novoOrdemservicoId;
};

// update
export const updateOrdemservico = async (
  id: string,
  data: Partial<IOrdemServico>
) => {
  await connectMongo();
  const ordemservicoAtualizado = await OrdemServico.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
    }
  );
  return ordemservicoAtualizado;
};

// delete
export const deleteOrdemservico = async (id: string) => {
  await connectMongo();
  await OrdemServico.findByIdAndDelete(id);
};
