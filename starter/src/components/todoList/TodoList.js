import React, { useEffect } from "react";
import TodoItem from "../TodoItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useGetTodosQuery } from "../../redux/apiSlice";
import Spinner from "../spinner/Spinner";

import "./todoList.css";

const TodoList = () => {
  const { data: todos = [], isLoading, isError } = useGetTodosQuery();

  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  return (
    <ul className="list-group">
      <TransitionGroup>
        {todos.map((todo) => (
          <CSSTransition key={todo.id} timeout={500} classNames="todo">
            <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default TodoList;
