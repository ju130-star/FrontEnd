"use client";

import {usuario } from "../scripts/initUsuario";
import { useEffect } from "react";
import styles from "./page.module.css";

//direcionar par página de login

export default function Home(){

  // useEffect(()=>{
  //   async function cadastraAdmin() {
  //     await criarAdmin();
  //   }
  //   cadastraAdmin();
  // },[]);

  return(
    <div>
      <h1>Bem-Vindo ao Sistema de Gestão de Ponto</h1>
      <p>Por favor, faça login para continuar</p>
      <a href="/login">Ir para Login</a>
    </div>
  );
}