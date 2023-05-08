import { AddTodo, DeleteTodo } from "../constant";

const initialState = { todoData: [] };

export const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddTodo:
      return {
        ...state,
        todoData: [...state.todoData, { todos: action.data }],
      };
      break;
    case DeleteTodo:
      const newState = state?.todoData?.filter((data) => {
        return data.todos.id !== action.data;
      });

      return [...state, newState];

    default:
      return state;
  }
};
