//rotas que não precisa passar o ID (GET e POST)

import { createOrdemservico, getAllOrdemservico } from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";



export async function GET() {
    //verificar a seção do ususario
    
  try {
    const data = await getAllOrdemservico(); //chama o controlador
    return NextResponse.json({ success: true, data: data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}

export async function POST(req: NextRequest) {
  //req são os dados que estou enviando
  try {
    const data = await req.json();
    const newOgetAllOrdemservico = await createOrdemservico(data);
    return NextResponse.json({ success: true, data: newOgetAllOrdemservico });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
