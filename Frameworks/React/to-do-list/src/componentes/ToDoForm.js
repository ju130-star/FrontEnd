import "./ToDoForm.css";
// componente para criar o furmulario
import { useState } from "react";
//função para criar tarefa
const ToDoForm = ({ addTarefa }) => {
  //função para armazenar o valor do imput -> useState
  const [tarefa, setTarefa] = useState("");
  //definir o useState => usa a memoria local do navegador para armazenar as mudanças de estado
  //o primeiro campo armazena as tarefas e o segundo campo armazena as mudanças de estado

  //função para atualizar o estado com o valor do input
  //função para criar uma nova tarefa ao ser clicado no botão submit
  const handleSubmit = (e) => {
    //impedir o funcionamento do padrão do botão submit
    e.preventDefault(); //não permite o carregamento da pagina
    //verifica se o campo não está vazio
    if (tarefa.trim() === "") {
      //adiciona tarefa ao verto da tarefa
      addTarefa(tarefa);
      //limpa o campo de input
      setTarefa("");
    }
  };
  //view
  return (
    //formulário para tarefas
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button className="btnEnviar" type="submit">
        Adicionar
      </button>
    </form>
  );
};

export default ToDoForm;
//componente para criar um formulario para adicionar tarefas
//pode ser utilizado em outras partes da aplicação(export)
