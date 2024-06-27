import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, checkTodo } from "../store/slices/todoSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onRemoveTodoClick = (id) => {
    dispatch(removeTodo(id));
  };

  const onCheckedClick = (checked, item) => {
    dispatch(checkTodo({ checked, item }));
  };

  return (
    <>
      {todos.map((item) => (
        <div className="pb-4" key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={(e) => onCheckedClick(e.target.checked, item)}
          />
          <label className="pl-2 pr-4 text-xl">{item.text}</label>

          <button
            onClick={() => onRemoveTodoClick(item.id)}
            className="h-10 bg-transparent hover:bg-red-600 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >
            Remove Task
          </button>
        </div>
      ))}
    </>
  );
}
