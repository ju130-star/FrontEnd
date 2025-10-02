//Rotas que Precisam do ID (PATCH ou PUT, GET (one), DELETE)

import { NextRequest, NextResponse } from "next/server";
import {getOneOrdemservico,updateOrdemservico,deleteOrdemservico,} from "@/controllers/OrdemServicoController";

interface Parametro {
  id: string;
}

// PATCH (update)
export async function PATCH(
  req: NextRequest,
  { params }: { params: Parametro }
) {
  try {
    const { id } = params;
    const data = await req.json();
    const ordemservicoAtualizado = await updateOrdemservico(id, data);
    if (!ordemservicoAtualizado) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    return NextResponse.json({ success: true, data: ordemservicoAtualizado });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}

// GET (one)
export async function GET(req: NextRequest, { params }: { params: Parametro }) {
  try {
    const { id } = params;
    const data = await getOneOrdemservico(id);
    if (!data) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    return NextResponse.json({ success: true, data: data });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}

// DELETE
export async function DELETE(
  req: NextRequest,
  { params }: { params: Parametro }
) {
  try {
    const { id } = params;
    await deleteOrdemservico(id);
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
