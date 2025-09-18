//client-side
"use client";

// Importa hooks do React e o tipo da tarefa
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Itarefa } from "./models/Tarefa";

// Componente principal da página
export default function Home() {
  // Estado para armazenar a lista de tarefas
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  // Estado para armazenar o texto da nova tarefa
  const [novaTarefa, setNovaTarefa] = useState<string>("");

  // Executa a busca das tarefas ao montar o componente
  useEffect(() => {
    buscartarefas();
  }, []);

  // Função para buscar tarefas na API
  const buscartarefas = async () => {
    try {
      const resposta = await fetch('/api/tarefas'); // Requisição GET para a API
      const data = await resposta.json(); // Converte resposta para JSON
      if (data.success) { // Se a resposta for bem-sucedida
        setTarefas(data.data); // Atualiza o estado com as tarefas recebidas
      }
    } catch (error) {
      console.error(error); // Exibe erro no console se ocorrer
    }
  };

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = async (e: FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if (novaTarefa.trim() === "") return; // Não adiciona tarefa vazia

    try {
      // Requisição POST para adicionar tarefa
      const resultado = await fetch('/api/tarefas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ titulo: novaTarefa }) // Envia o título da tarefa
      });
      const data = await resultado.json(); // Converte resposta para JSON
      if (data.success) {
        setNovaTarefa(""); // Limpa o campo de nova tarefa
        setTarefas([...tarefas, data.data]); // Adiciona nova tarefa ao estado
        buscartarefas(); // Atualiza a lista de tarefas
      }
    } catch (error) {
      console.error(error); // Exibe erro no console se ocorrer
    }
  };

  // Função para atualizar o status de conclusão da tarefa
  const atualizarTarefa = async (id: string, status: boolean) => {
    try {
      // Requisição PATCH para atualizar tarefa
      const resposta = await fetch(`/api/tarefas/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ concluida: !status }) // Alterna o status de conclusão
      });
      const data = await resposta.json(); // Converte resposta para JSON
      if (data.success) {
        // Atualiza a tarefa modificada no estado
        setTarefas(tarefas.map((tarefa) => (tarefa._id === id ? data.data : tarefa)));
        buscartarefas(); // Atualiza a lista de tarefas
      }
    } catch (error) {
      console.error(error); // Exibe erro no console se ocorrer
    }
  };

  // deletarTarefa
  const deletarTarefa = async (id: string) => {
    try {
      await fetch(`/api/tarefas/${id}`,{
        method: "DELETE",
      });
      buscartarefas(); // Atualiza a lista de tarefas
    } catch (error) {
      console.error(error); // Exibe erro no console se ocorrer
    }
  };

  // Interface do Usuário ReactDom
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      {/* Formulário para adicionar nova tarefa */}
      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNovaTarefa(e.target.value)}
          placeholder="Adicionar Uma Nova Tarefa"
        />
        <button type="submit">Adicionar Tarefa</button>
      </form>
      {/* Lista de tarefas */}
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa._id.toString()}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => atualizarTarefa(tarefa._id.toString(), tarefa.concluida)}/>
            {tarefa.titulo}
            <button onClick={() => deletarTarefa(tarefa._id.toString())}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}