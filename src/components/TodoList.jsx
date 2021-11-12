import React from "react";
import {get, post} from "../api/helpers";

export default function TodoList({ list }) {
  return (
    <ul id="myUL">
      {list?.map((item, idx) => (
        // <li onClick={()=>handleStatus(item.id)} class={item.type=='completed'?"checked":""}>{item.content}</li>
        <li className={item.type=='completed'?"checked":""}>{item.content}</li>
      ))}
    </ul>
  );
}
