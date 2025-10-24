// Get e post
import { Router } from "express";
import {
  registrarPonto,
  listarRegistrosFuncionario,
  listarRegistrosDia,
} from "@/controllers/RegistroPontoController";

const router = Router();

// Registrar ponto
router.post("/", registrarPonto);

// Listar todos os registros de um funcionário
router.get("/:funcionarioId", listarRegistrosFuncionario);

// Listar registros do dia
router.get("/dia/:funcionarioId", listarRegistrosDia);

export default router;
