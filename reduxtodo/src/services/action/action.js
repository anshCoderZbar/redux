import { AddTodo, DeleteTodo } from "../constant";

export const addTodo = (data) => {
  return {
    type: AddTodo,
    data: data,
  };
};

export const deleteTodo = (data) => {
  return {
    type: DeleteTodo,
    data: data,
  };
};
