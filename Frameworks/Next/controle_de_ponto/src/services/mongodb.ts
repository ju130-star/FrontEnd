import mongoose from "mongoose";

// Pega a URL do MongoDB do .env.local
const MongoUri = process.env.DATABASE_URL;

if (!MongoUri) {
  throw new Error("Defina o DATABASE_URL no .env.local");
}

// Cache para armazenar a conexão no Node global
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached = (global as any).mongoose;

if (!cached) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cached = (global as any).mongoose = { connected: null, promise: null };
}

async function connectMongo() {
  if (cached.connected) {
    return cached.connected;
  }

  if (!cached.promise) {
    const options = { bufferCommands: false }; // desativa buffer de comando do Mongoose
    cached.promise = mongoose.connect(MongoUri!, options).then((mongoose) => {
      console.log("Conexão estabelecida no MongoDB");
      return mongoose;
    });
  }

  try {
    cached.connected = await cached.promise;
  } catch (error) {
    cached.promise = null; // limpa a promessa em caso de erro
    throw error;
  }

  return cached.connected;
}

export default connectMongo;
