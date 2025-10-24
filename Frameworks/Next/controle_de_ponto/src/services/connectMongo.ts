// src/services/connectMongo.ts
import mongoose from "mongoose";

const MONGODB_URI =
  process.env.DATABASE_URL ||
  "mongodb://admin:admin123@localhost:27017/controle_de_ponto?authSource=admin";

if (!MONGODB_URI) throw new Error("Defina o DATABASE_URL no .env.local");

let cached = global.mongoose as { conn: any; promise: any };
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectMongo() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectMongo;
