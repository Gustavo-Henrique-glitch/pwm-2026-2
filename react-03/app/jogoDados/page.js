"use client";

import { useState } from "react";

const MAXIMO_RODADAS = 5;

export default function JogoDados() {
  const [jogadorAtual, setJogadorAtual] = useState(1);
  const [rodadaAtual, setRodadaAtual] = useState(1);
  const fimDeJogo = rodadaAtual > MAXIMO_RODADAS;

  function handleJogarDados1Click() {
    setJogadorAtual(2);
  }

  function handleJogarDados2Click() {
    setJogadorAtual(1);
    setRodadaAtual(rodadaAtual + 1);
  }
  return (
    <div>
      <h1>Jogo de Dados</h1>
      <h2>{fimDeJogo ? "Fim de Jogo" : `Rodada Atual: ${rodadaAtual}`}</h2>
      <p>
        <button
          disabled={fimDeJogo || jogadorAtual !== 1}
          onClick={handleJogarDados1Click}
        >
          Jogar Dados 1
        </button>
        <button
          disabled={fimDeJogo || jogadorAtual !== 2}
          onClick={handleJogarDados2Click}
        >
          Jogar Dados 2
        </button>
      </p>
    </div>
  );
}
