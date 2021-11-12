import React from "react";

export default function AddTodo({ todoText, handleChange }) {
  return (
    <React.Fragment>
      <input type="text" value={todoText} onChange={handleChange} />
      <button>Add</button>
    </React.Fragment>
  );
}
