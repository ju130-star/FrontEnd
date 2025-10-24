import bcrypt from "bcryptjs";
import connectMongo from "../services/mongodb.ts";
import Usuario from "../models/Usuario.ts";
import mongoose from "mongoose";

export const criarUsuarios = async () => {
  try {
    await connectMongo();

    const adminEmail = "admin@admin.com";
    const adminExiste = await Usuario.findOne({ email: adminEmail });

    if (!adminExiste) {
      const senhaHash = await bcrypt.hash("123456", 10);
      const admin = new Usuario({
        nome: "Administrador",
        email: adminEmail,
        senha: senhaHash,
        tipoUsuario: "admin",
      });
      await admin.save();
      console.log("✅ Usuário Admin criado!");
    } else {
      console.log("⚠️ Usuário admin já existe");
    }
  } catch (error) {
    console.error("❌ Erro ao criar admin:", error);
  } finally {
    mongoose.connection.close();
  }
};

criarUsuarios();
