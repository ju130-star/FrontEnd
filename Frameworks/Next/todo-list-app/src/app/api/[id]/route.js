//Criar as function put e delete
import connectMongo from "@/services/mongodb";
import Todo from "@/models/Todo";

import { NextResponse } from "next/server";
export async function PUT(req, { params }) {
  try {
    await connectMongo(); //conecta ao banco de dados
    const data = await req.json(); //pega os dados do corpo da requisição
    const tarefaAtualizada = await Todo.findByIdAndUpdate(id.id, data, {
      new: true, //retorna o obj atualizado
      runValidators: true, //executa as validações do modelo
    })
    if (!tarefaAtualizada) {
      return NextResponse.json({ success: false }, {status: 404}) //retorna mensagem de erro em formato json
    }
    return NextResponse.json({ success: true, data: tarefaAtualizada }); //retorna a tarefa atualizada em formato json
  } catch (err) {
    return NextResponse.json({ success: false, status: 500 }); //retorna mensagem de erro em formato json
  }
}
export async function DELETE(req,{id}){
    try {
        await connectMongo();
        const deleteTarefa = await Todo.deleteOne({
            _id: id.id
        });
        if(!deleteTarefa){
            return NextResponse.json({success: false}, {status: 400});
        }
        return NextResponse.json({success: true, data:{}})
    } catch (error) {
         return NextResponse.json({success: false}, {status: 500});
    }
}