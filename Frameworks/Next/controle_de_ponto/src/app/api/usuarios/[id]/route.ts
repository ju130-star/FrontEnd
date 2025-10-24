import { NextResponse } from "next/server";
import Usuario from "@/models/Usuario";
import connectMongoDB from "@/services/mongodb";

// GET — Buscar usuário por ID
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongoDB();
    const usuario = await Usuario.findById(params.id);

    if (!usuario) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(usuario);
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return NextResponse.json(
      { error: "Erro ao buscar usuário" },
      { status: 500 }
    );
  }
}

// PUT — Atualizar dados do usuário
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongoDB();
    const dados = await req.json();

    const usuarioAtualizado = await Usuario.findByIdAndUpdate(
      params.id,
      dados,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!usuarioAtualizado) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Usuário atualizado com sucesso",
      usuario: usuarioAtualizado,
    });
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar usuário" },
      { status: 500 }
    );
  }
}

// DELETE — Excluir usuário
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectMongoDB();
    const usuarioRemovido = await Usuario.findByIdAndDelete(params.id);

    if (!usuarioRemovido) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Usuário excluído com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    return NextResponse.json(
      { error: "Erro ao excluir usuário" },
      { status: 500 }
    );
  }
}
