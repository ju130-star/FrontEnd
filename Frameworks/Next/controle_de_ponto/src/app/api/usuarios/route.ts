import { UsuarioController } from "@/controllers/UsuarioController";

// Cadastro de usuário
export async function POST(req: Request) {
  return UsuarioController.cadastrar(req);
}

// Listagem de usuários
export async function GET() {
  return UsuarioController.listar();
}
