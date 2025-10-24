import { NextRequest, NextResponse } from "next/server";
import  from "@"; 
import Usuario from "@/models/Usuario"; 

export async function GET() {
  await ();

  const Usuarios = await Usuario.find();
  return NextResponse.json(Usuarios);
}

export async function POST(request: NextRequest) {
  await ();

  const data = await request.json();

  try {
    const novoUsuario = await Usuario.create(data);
    return NextResponse.json(novoUsuario, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao criar funcionário" },
      { status: 400 }
    );
  }
}
