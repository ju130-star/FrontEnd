import { UsuarioController } from "@/controllers/UsuarioController";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  return UsuarioController.login(req);
}
