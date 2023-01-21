import React from "react";
import { useGetTodosQuery } from "../redux/apiSlice";

const TotalCompleteItems = () => {
  const { data: todos = [] } = useGetTodosQuery();

  const completedTodos = todos.filter((todo) => todo.completed === true);
  return <h4 className="mt-3">Total Complete Items: {completedTodos.length}</h4>;
};

export default TotalCompleteItems;
