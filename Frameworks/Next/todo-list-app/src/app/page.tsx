//indicar que é um componente do cliente Side
'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [tarefas, setTarefas] = useState([]); //manipulador de lista de tarefas
  const [newTarefa, setNewTarefa] = useState(''); //manipulador de nova tarefa


useEffect(() => {fetchTarefas();},[]); //carregar tarefas ao iniciar o componente
//UseEffect para preencher as lista de tarefas enquanto carrega a página
//função para buscar tarefas do backend

//método para pegar todas as tarefas da coleção no mongo db
const fetchTarefas = async () => {
  const response =await fetch('/api/todos'); //chama a rota da api
  const data = await response.json(); //converte a resposta em json
  setTarefas(data.data); //atualiza o estado com as tarefas recebidas
}

async function addTarefa() {
  const response = await fetch('/api/todos', {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify({ tarefa: newTarefa }),
  });
  const data = await response.json();
  setTarefas([...tarefas, data.data]);
  setNewTarefa('');
}
}