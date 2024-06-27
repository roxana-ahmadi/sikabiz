import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        checked: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    checkTodo: (state, action) => {
      const updatedTodo = {
        ...action.payload.item,
        checked: action.payload.checked,
      };

      state.todos = state.todos.map((item) =>
        item.id === action.payload.item.id ? updatedTodo : item
      );
    },
  },
});

export const { addTodo, removeTodo, checkTodo } = todoSlice.actions;

export default todoSlice.reducer;
