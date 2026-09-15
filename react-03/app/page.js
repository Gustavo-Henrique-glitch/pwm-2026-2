"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useTarefasStore } from "@/zustand";

export default function Home() {
  const filtrarConcluidas = useTarefasStore((state) => state.filtrarConcluidas);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Exemplo com Back4App</h1>
        <Link href="/listaTarefas">
          Lista de Tarefas
          {filtrarConcluidas ? " (filtro ativado)" : " (filtro desativado)"}
        </Link>
        <br />
        <Link href="/jogoDados">Jogo de Dados</Link>
      </main>
    </div>
  );
}
