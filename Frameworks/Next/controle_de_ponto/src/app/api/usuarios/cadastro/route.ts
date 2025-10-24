import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Usuario from "@/models/Usuario";

const MONGODB_URI = process.env.MONGODB_URI || "";

async function connectIfNeeded() {
  if (!MONGODB_URI) throw new Error("MONGODB_URI não configurado.");
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, senha } = body;

    if (!nome || !email || !senha) {
      return NextResponse.json(
        { message: "Campos obrigatórios ausentes: nome, email, senha." },
        { status: 400 }
      );
    }

    await connectIfNeeded();

    const existente = await Usuario.findOne({ email });
    if (existente) {
      return NextResponse.json(
        { message: "Email já cadastrado." },
        { status: 409 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);

    const novoUsuario = new Usuario({
      nome,
      email,
      senha: senhaHash,
    });

    await novoUsuario.save();

    return NextResponse.json(
      { message: "Cadastro realizado com sucesso." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro no cadastro:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
