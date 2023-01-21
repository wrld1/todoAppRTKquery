import React, { useCallback } from "react";

import { useDeleteTodoMutation, useCompleteTodoMutation } from "../redux/apiSlice";

const TodoItem = ({ id, title, completed }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [completeTodo] = useCompleteTodoMutation();

  const handleCompleteClick = () => {
    completeTodo({
      id: id,
      completed: !completed,
    });
  };

  const handleDeleteClick = useCallback(
    (id) => {
      deleteTodo(id);
    },
    // eslint-disable-next-line
    []
  );

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            onChange={handleCompleteClick}
            type="checkbox"
            className="mr-3"
            checked={completed}
          ></input>
          {title}
        </span>
        <button onClick={() => handleDeleteClick(id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
