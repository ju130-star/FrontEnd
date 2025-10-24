import bcrypt from "bcryptjs"; // melhor usar bcryptjs no Node/Next.js
import connectMongo from "../services/connectMongo";
import Usuario from "../models/Usuario";
import mongoose from "mongoose";

export const criarAdmin = async () => {
  try {
    await connectMongo();

    const adminEmail = "admin@admin.com";

    // Verificar se usuário já existe
    const adminExiste = await Usuario.findOne({ email: adminEmail });
    if (!adminExiste) {
      const senhaHash = await bcrypt.hash("admin123", 10);

      const admin = new Usuario({
        nome: "Administrador",
        email: adminEmail,
        senha: senhaHash,
        funcao: "admin",
      });

      await admin.save();
      console.log("Usuário Admin Criado!!");
    } else {
      console.log("Usuário já existe");
    }
  } catch (error) {
    console.error("Erro ao criar admin:", error);
  } finally {
    mongoose.connection.close(); // fecha a conexão corretamente
  }
};

criarAdmin();
