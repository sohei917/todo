export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <button onClick={() => onClickBack(index)}>戻す</button>
              <p className="todo-item">{todo}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
