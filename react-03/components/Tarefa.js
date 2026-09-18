import Link from "next/link";

export default function Tarefa({ tarefa, onUpdate, onDelete }) {
  return (
    <p>
      <li>
        <Link href={`/listaTarefas/${tarefa.objectId}?filtro=TODAS`}>
          {tarefa.descricao}
        </Link>
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => onUpdate({ ...tarefa, concluida: !tarefa.concluida })}
        />
        <button onClick={() => onDelete(tarefa)}>🗑</button>
      </li>
    </p>
  );
}
