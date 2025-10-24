import { NextResponse } from "next/server";
import Usuario from "../models/Usuario";
import connectMongoDB from "../services/mongodb";
import bcrypt from "bcrypt";

export class UsuarioController {
  // Cadastrar novo usuário
  static async cadastrar(req: Request) {
    try {
      await connectMongoDB();
      const { nome, email, senha, tipoUsuario } = await req.json();

      const usuarioExistente = await Usuario.findOne({ email });
      if (usuarioExistente) {
        return NextResponse.json(
          { error: "Usuário já cadastrado com este e-mail." },
          { status: 400 }
        );
      }

      const novoUsuario = new Usuario({ nome, email, senha, tipoUsuario });
      await novoUsuario.save();

      return NextResponse.json(
        { message: "Usuário cadastrado com sucesso!", usuario: novoUsuario },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json(
        { error: "Erro ao cadastrar usuário." },
        { status: 500 }
      );
    }
  }

  // Login do usuário
  static async login(req: Request) {
    try {
      await connectMongoDB();
      const { email, senha } = await req.json();

      const usuario = await Usuario.findOne({ email }).select("+senha");
      if (!usuario)
        return NextResponse.json(
          { error: "Usuário não encontrado." },
          { status: 404 }
        );

      const senhaCorreta = await usuario.compareSenha(senha);
      if (!senhaCorreta)
        return NextResponse.json(
          { error: "Senha incorreta." },
          { status: 401 }
        );

      return NextResponse.json({
        message: "Login realizado com sucesso!",
        usuario: {
          _id: usuario._id,
          nome: usuario.nome,
          email: usuario.email,
          tipoUsuario: usuario.tipoUsuario,
        },
      });
    } catch (error) {
      return NextResponse.json(
        { error: "Erro ao realizar login." },
        { status: 500 }
      );
    }
  }

  // Listar usuários (para o admin)
  static async listar() {
    try {
      await connectMongoDB();
      const usuarios = await Usuario.find();
      return NextResponse.json(usuarios);
    } catch (error) {
      return NextResponse.json(
        { error: "Erro ao buscar usuários." },
        { status: 500 }
      );
    }
  }
}
