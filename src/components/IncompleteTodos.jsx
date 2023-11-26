export const IncompleteTodos = (props) => {
  const {
    todos,
    times,
    onClickUp,
    onClickDown,
    onClickComplete,
    onClickDelete
  } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{`№${index + 1}`}</p>
              <button onClick={() => onClickDown(index)}>下</button>
              <button onClick={() => onClickUp(index)}>上</button>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
              <p className="todo-item">{todo}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
