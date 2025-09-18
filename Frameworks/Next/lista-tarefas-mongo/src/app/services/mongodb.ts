//convert String em URL
import mongoose from "mongoose";

const MongoUri = process.env.DATABASE_URL;

//verifica se a variável de ambiente está definida
if (!MongoUri) { //verifica a nulabilidade e uma variavl
    throw new Error(' Defina a data base URL no arquivo .env.local');
}

//cria uma variavel para armazenar chache do sistema
let cached = (global as any).mongoose; //vai armazenar previamente do global do node, caso já exista uma conexão com o mongoDB ;

//caso não exista uma conexão, cria uma nova conexão
if (!cached) {//verifica a nulidade da variavel
    cached = (global as any).mongoose = { conecta: null, promessa: null };
}

//função de conexão com o mongodb
async function connectMongo() {
    if (cached.conectada) return cached.conectada; //se já estiver conectada, retorna a conexão

    //verificar se já existe uma promessa de conexão
    if (!cached.promessa) { //se nula
        const aguarde ={ bufferCommands: false}; //desativa o buffer de comandos caso não use
        //cria uma promessa de conexão
        cached.promessa = mongoose.connect(MongoUri!, aguarde)
        .then((mongoose) => {
            console.log('Conectado ao MongoDB');
            return mongoose;
        });
    }
    try{
        //cria a conexão a partir da promessa
    cached.conectada = await cached.promessa; //aguarda a promessa ser resolvida    
} catch (error) {
    //caso ocorra alhum erro
    cached.promessa = null; //reseta a promessa
    throw error;
}
    return cached.conectada; //retorna a conexão
}

//transforma a função em um componente reutilizavel
export default connectMongo;

//1.Passo -> criar o endereço da conexão
//2º Passo -> criar o cached, para armazenar as conexões ao longo do projeto
//3º Passo -> verificar se já existe uma conexão estabelecida com DB
//4º passo -> criar uma promessa de conexão caso ainda não exista
//5º passo -> retornar a promessa em uma conexão  estabelecida conexão estabelecida