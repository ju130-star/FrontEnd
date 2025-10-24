"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

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
        setErro(data.error || "Erro ao fazer login.");
      } else {
        router.push("/inicio");
      }
    } catch (error) {
      console.error(error);
      setErro("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Bem-vindo!</h1>
        <p className={styles.subtitle}>Faça login para continuar</p>

        {erro && <p className={styles.erro}>{erro}</p>}

        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              required
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.primaryButton}>
            Entrar
          </button>
        </form>

        <p className={styles.registerText}>
          Não tem conta?{" "}
          <a href="/cadastro" className={styles.link}>
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
