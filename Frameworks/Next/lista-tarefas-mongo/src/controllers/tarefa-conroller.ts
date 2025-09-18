//funçoes do Controller (CRUD)

import Tarefa, { Itarefa } from "@/app/models/Tarefa";
import connectMongo from "@/app/services/mongodb";

//read -> pegar as tarefas do banco e retornar em uma lista(vetor)
export const readAllTarefas = async (): Promise<Itarefa[]> => {
      await connectMongo(); //aguarda a conexão com o mongoDB
      const tarefas = await Tarefa.find({}); //busca todas as tarefas e ordena pela data de criação (mais recentes primeiro)
        return tarefas;
    }
    //create -> criar uma nova tarefa
    export async function createTarefa(data: Partial<Itarefa>): Promise<Itarefa> {
      await connectMongo(); //aguarda a conexão com o mongoDB
      const tarefa = await Tarefa.create(data);
      return tarefa; // retorna a tarefa com o ID
    }

    //update -> atualizar uma tarefa
    export async function updateTarefa(id: string, data: Partial<Itarefa>): Promise<Itarefa | null> {
      await connectMongo(); //aguarda a conexão com o mongoDB
      const tarefa = await Tarefa.findByIdAndUpdate(id, data); //retorna a tarefa atualizada
      return tarefa; // retorna a tarefa atualizada ou nulo se não encontrada
    }

    //delete -> deletar uma tarefa
    export const deleteTarefa = async (id: string): Promise<boolean>  => {
      await connectMongo(); //aguarda a conexão com o mongoDB
      const result = await Tarefa.deleteOne({ _id: id });
      return result.deletedCount>0; //retorna true se deletou, false se não
    //se for maior que 0, deletou se for 0, não deletou
    };