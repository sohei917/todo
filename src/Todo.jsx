import { useState } from "react";
import { CompleteTodos } from "./components/CompleteTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { InputTodo } from "./components/InputTodo";
import "./styles.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [todosTime, settodosTime] = useState(new Date());
  const [completeTodos, setCompleteTodos] = useState([]);

  /*textを変数に格納*/
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return; /*空白は処理なし */
    const newTodos = [...incompleteTodos, todoText];
    /*const newTodoTimes = [...todosTime, new Date()];*/
    setIncompleteTodos(newTodos);
    // settodosTime(newTodoTimes);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  /*Todoの順番を変更する上*/
  const onClickUp = (index) => {
    if (index === 0) return;
    const newIncompleteTodos = [...incompleteTodos];
    [newIncompleteTodos[index], newIncompleteTodos[index - 1]] = [
      newIncompleteTodos[index - 1],
      newIncompleteTodos[index]
    ];
    setIncompleteTodos(newIncompleteTodos);
  };

  /*Todoの順番を変更する下*/
  const onClickDown = (index) => {
    if (index === incompleteTodos.length - 1) return;
    const newIncompleteTodos = [...incompleteTodos];
    [newIncompleteTodos[index], newIncompleteTodos[index + 1]] = [
      newIncompleteTodos[index + 1],
      newIncompleteTodos[index]
    ];
    setIncompleteTodos(newIncompleteTodos);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />
      {isMaxLimitIncompleteTodos && (
        <p style={{ color: "red" }}>
          登録できるTODOは5個までだよ〜。消化しろ〜。
        </p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        todoTime={todosTime}
        onClickUp={onClickUp}
        onClickDown={onClickDown}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
