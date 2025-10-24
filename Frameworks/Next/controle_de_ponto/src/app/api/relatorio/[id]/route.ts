import { NextRequest, NextResponse } from "next/server";
import {

 deletarRelatorio,
  listarRelatoriosPorFuncionario,
} from "@/controllers/RelatorioController";

// GET /api/relatorio/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return listarRelatoriosPorFuncionario(request, params.id);
}

// PUT /api/relatorio/[id]
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return atualizarRelatorios(request, params.id);
}

// DELETE /api/relatorio/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return deletarRelatorio(request, params.id);
}
function atualizarRelatorios(_request: NextRequest, id: string) {
    throw new Error("Function not implemented.");
}

