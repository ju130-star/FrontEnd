// criar as rotas que não precisão de id GET, POST

import { createTarefa, readAllTarefas } from "@/controllers/tarefa-conroller";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const tarefas = await readAllTarefas(); // chama a função do controller
    //trata a resposta obtida pelo mongodb
    return NextResponse.json({ success: true, data: tarefas });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
export async function POST(req: NextRequest) {
  //cria uma nova tarefa
  try {
    const data = await req.json(); //verifica o corpo da requisição
    //chama a função do controller
    const newTarefa = await createTarefa(data);
    return NextResponse.json({ success: true, data: newTarefa });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
