import mongoose from "mongoose";

const uri =
  "mongodb://admin:123456@localhost:27017/controle_de_ponto?authSource=admin";

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB conectado com sucesso!"))
  .catch((err) => console.error("Erro ao conectar MongoDB:", err));
