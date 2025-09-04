import mongoose from "mongoose"

//arrow function
const connectMongo = async () => {
    mongoose.connect(process.env.DATABASE_URL) //ESTABELECE CONEXAO COM O BANCO DE DADOS
     .then(() => console.log("Conectado ao MongoDB"));

}

export default connectMongo;
