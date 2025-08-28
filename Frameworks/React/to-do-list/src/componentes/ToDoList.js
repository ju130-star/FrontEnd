import "./ToDoList.css";
const TodoList = ({ tarefas, removeTarefa }) => {
    //retorna uma lista de tarefas
  return (
    //lista não ordenada
    <ul>
        {/* faz o mapeamento do vetor de tarefas */}
      {tarefas.map((tarefa, index) => ( // Mapeia as tarefas e cria um item de lista para cada uma
        <li key={index}> 
          {tarefa}
          <button onClick={() => removeTarefa(index)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
