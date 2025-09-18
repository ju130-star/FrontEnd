// rotas que precisam do id PUT, DELETE

import { deleteTarefa, updateTarefa } from "@/controllers/tarefa-conroller";
import { NextRequest, NextResponse } from "next/server";

interface Parametros {
  id: string;
}

//PATH -> atualizar uma tarefa
export async function PATH(req: NextRequest, { params }: { params: Parametros }) {
    try {
        const {id} = params; //pega o id dos parametros
        const data = await req.json();
        const tarefaAtualizada = await updateTarefa(id, data);
        if (!tarefaAtualizada) {
            return NextResponse.json({ success: false, error: "not found" });
        }
        return NextResponse.json({ success: true, data: tarefaAtualizada });
    } catch (error) {
        return NextResponse.json({ success: false, error: error });
    }
}
//DELETE -> deletar uma tarefa
export async function DELETE({ params }: { params: Parametros }) {
    try {
        const {id} = params; //pega o id dos parametros
        const resultado = await deleteTarefa(id);
        if (!resultado) {
            return NextResponse.json({ success: false, error: "not found" });
        }
        return NextResponse.json({ success: true, data: {}});
    } catch (error) {
        return NextResponse.json({ success: false, error: error });
    }
}