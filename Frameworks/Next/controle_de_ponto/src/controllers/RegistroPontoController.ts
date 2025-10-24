import { Request, Response } from "express";
import RegistroPonto, {
  IRegistroPonto,
  TipoRegistro,
} from "../models/RegistroPonto";


// Registrar ponto

export const registrarPonto = async (req: Request, res: Response) => {
  try {
    const { funcionarioId, nomeFuncionario } = req.body;

    if (!funcionarioId || !nomeFuncionario) {
      return res.status(400).json({ message: "Campos obrigatórios faltando." });
    }

    // Buscar último registro do dia para alternar tipo
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const ultimoRegistro = await RegistroPonto.findOne({
      funcionarioId,
      dataHora: { $gte: hoje },
    }).sort({ dataHora: -1 });

    let tipoRegistro: TipoRegistro = "Entrada";
    if (ultimoRegistro && ultimoRegistro.tipoRegistro === "Entrada")
      tipoRegistro = "Saída";

    const novoRegistro: IRegistroPonto = new RegistroPonto({
      funcionarioId,
      nomeFuncionario,
      tipoRegistro,
      dataHora: new Date(),
    });

    // Se for Saída, calcular horas trabalhadas desde a Entrada
    if (tipoRegistro === "Saída" && ultimoRegistro) {
      const horas =
        (novoRegistro.dataHora.getTime() - ultimoRegistro.dataHora.getTime()) /
        1000 /
        3600;
      novoRegistro.horasTrabalhadas = parseFloat(horas.toFixed(2)); // 2 casas decimais
    }

    const registroSalvo = await novoRegistro.save();
    return res.status(201).json(registroSalvo);
  } catch (error) {
    console.error("Erro ao registrar ponto:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};


// Listar registros de um funcionário

export const listarRegistrosFuncionario = async (
  req: Request,
  res: Response
) => {
  try {
    const { funcionarioId } = req.params;

    const registros = await RegistroPonto.find({ funcionarioId }).sort({
      dataHora: -1,
    });
    return res.status(200).json(registros);
  } catch (error) {
    console.error("Erro ao listar registros:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};


// Listar registros do dia

export const listarRegistrosDia = async (req: Request, res: Response) => {
  try {
    const { funcionarioId } = req.params;

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const amanha = new Date(hoje);
    amanha.setDate(hoje.getDate() + 1);

    const registros = await RegistroPonto.find({
      funcionarioId,
      dataHora: { $gte: hoje, $lt: amanha },
    }).sort({ dataHora: 1 });

    return res.status(200).json(registros);
  } catch (error) {
    console.error("Erro ao listar registros do dia:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
// Deletar registro de ponto
export const deletarRegistroPonto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const registroRemovido = await RegistroPonto.findByIdAndDelete(id);
    
    if (!registroRemovido) {
      return res.status(404).json({ message: "Registro de ponto não encontrado." });
    }

    return res.status(200).json({ 
      message: "Registro de ponto deletado com sucesso.",
      registro: registroRemovido 
    });
  } catch (error) {
    console.error("Erro ao deletar registro de ponto:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
