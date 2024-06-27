import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";

export default function AddTodo() {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="flex p-8 items-center justify-center gap-5">
      <input
        className="h-10 rounded-md border border-blue-gray-200 w-full max-w-xs"
        placeholder="type here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="h-10 bg-transparent hover:bg-green-600 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
        onClick={() => addTodoHandler()}
      >
        Add Task
      </button>
    </div>
  );
}
