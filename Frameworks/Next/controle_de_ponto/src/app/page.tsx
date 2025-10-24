"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !senha) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErro(data.message || "Erro ao fazer login.");
      } else {
        // Redireciona para página inicial após login
        router.push("/inicio");
      }
    } catch (error) {
      console.error(error);
      setErro("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        {erro && (
          <p className="text-red-500 mb-4 text-center">{erro}</p>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Digite seu email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-400 hover:bg-teal-500 text-white py-2 rounded-lg transition-colors"
          >
            Entrar
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Não tem conta? <a href="/cadastro" className="text-teal-400 hover:underline">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}
