//criar as funções GEt e POST para a api de Tarefas
import connectMongo from "@/services/mongodb";
import Todo from "@/models/Todo";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongo(); //conecta ao banco de dados
    const tarefas = await Todo.find({});//busca todas as tarefas
    return NextResponse.json({success: true, data: tarefas}); //retorna as tarefas em formato json
  } catch (err) {
    return NextResponse.json({success: false}, {status: 500}); //retorna mensagem de erro em formato json
  }
}

export async function POST(req) {
try{
    await connectMongo(); //conecta ao banco de dados
    const data = await req.json(); //pega os dados do corpo da requisição
    const tarefa = await Todo.create(data); //cria uma nova tarefa
    return NextResponse.json({success: true, data: tarefa}); //retorna a tarefa criada em formato json\
}catch(err){
    return NextResponse.json({success: false}, {status:500}); //retorna mensagem de erro em formato json
}
}