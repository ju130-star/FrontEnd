import { Router, Request, Response } from "express";
import { 
    registrarPonto, 
    listarRegistrosFuncionario, 
    listarRegistrosDia,
    deletarRegistroPonto,  
    } from "@/controllers/RegistroPontoController";

const router = Router();

// Registrar ponto
router.post("/", registrarPonto);

// Listar registros do dia
router.get("/dia/:funcionarioId", listarRegistrosDia);

// Listar todos os registros de um funcionário
router.get("/:funcionarioId", listarRegistrosFuncionario);

// Atualizar registro
// Atualizar registro - endpoint not implemented in controller; return 501
router.put("/registro/:id", (req: Request, res: Response) => {
  res.status(501).json({ message: "Atualização de registro não implementada" });
});
// Deletar registro
router.delete("/registro/:id", deletarRegistroPonto);

export default router;
