"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-Vindo ao Sistema de Gestão de Ponto</h1>
      <p className={styles.subtitle}>
        Por favor, faça login para continuar
      </p>
      <Link href="/login" className={styles.button}>
        Ir para Login
      </Link>
    </div>
  );
}
