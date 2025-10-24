import { Router } from "express";
import {
  criarRelatorio,
  listarRelatorios,
  listarRelatoriosPorFuncionario,
  gerarRelatorioPeriodo,
} from "@/controllers/RelatorioController";

const router = Router();

// Criar relatório
router.post("/", criarRelatorio);

// Listar todos os relatórios
router.get("/", listarRelatorios);

// Listar por funcionário
router.get("/funcionario/:funcionarioId", listarRelatoriosPorFuncionario);

// Gerar relatório por período
router.get("/periodo", gerarRelatorioPeriodo);

export default router;
