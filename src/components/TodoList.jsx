import React from "react";

export default function TodoList({ list }) {
  return (
    <ul className="list">
      {list?.map((item, idx) => (
        <li>{item.content}</li>
      ))}
    </ul>
  );
}
