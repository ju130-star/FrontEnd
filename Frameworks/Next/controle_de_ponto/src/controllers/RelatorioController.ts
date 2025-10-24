import Relatorio, { IRelatorio } from "../models/Relatorio";
import { Request, Response } from "express";

// Criar um novo relatório
export const criarRelatorio = async (req: Request, res: Response) => {
  try {
    const {
      date,
      funcionarioId,
      nomeFuncionario,
      horasTrabalhadas,
      tipoRelatorio,
    } = req.body;

    // Validação básica
    if (
      !date ||
      !funcionarioId ||
      !nomeFuncionario ||
      horasTrabalhadas == null
    ) {
      return res.status(400).json({ message: "Campos obrigatórios faltando." });
    }

    const novoRelatorio: IRelatorio = new Relatorio({
      date,
      funcionarioId,
      nomeFuncionario,
      horasTrabalhadas,
      tipoRelatorio: tipoRelatorio || "admin",
    });

    const relatorioSalvo = await novoRelatorio.save();
    return res.status(201).json(relatorioSalvo);
  } catch (error) {
    console.error("Erro ao criar relatório:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};

// Listar todos os relatórios
export const listarRelatorios = async (req: Request, res: Response) => {
  try {
    const relatorios = await Relatorio.find().sort({ date: -1 });
    return res.status(200).json(relatorios);
  } catch (error) {
    console.error("Erro ao listar relatórios:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};

// Listar relatórios por funcionário
export const listarRelatoriosPorFuncionario = async (
  req: Request,
  res: Response
) => {
  try {
    const { funcionarioId } = req.params;
    const relatorios = await Relatorio.find({ funcionarioId }).sort({
      date: -1,
    });
    return res.status(200).json(relatorios);
  } catch (error) {
    console.error("Erro ao listar relatórios do funcionário:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};

// Gerar relatório de horas em um período
export const gerarRelatorioPeriodo = async (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      return res
        .status(400)
        .json({ message: "É necessário informar startDate e endDate." });
    }

    const inicio = new Date(startDate as string);
    const fim = new Date(endDate as string);

    const relatorios = await Relatorio.find({
      date: { $gte: inicio, $lte: fim },
    });

    // Total de horas trabalhadas no período
    const totalHoras = relatorios.reduce(
      (acc, rel) => acc + rel.horasTrabalhadas,
      0
    );

    return res.status(200).json({
      periodo: { inicio, fim },
      totalHoras,
      relatorios,
    });
  } catch (error) {
    console.error("Erro ao gerar relatório por período:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
export const deletarRelatorio = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const relatorioRemovido = await Relatorio.findByIdAndDelete(id);
    if (!relatorioRemovido) {
      return res.status(404).json({ message: "Relatório não encontrado." });
    }
    return res.status(200).json({ message: "Relatório deletado com sucesso." });
  } catch (error) {
    console.error("Erro ao deletar relatório:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
