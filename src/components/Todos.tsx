import React from "react"; // optional
import TodoItem from "./TodoItem";
import Todo from "../models/todo";

const ToDos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {/* {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))} */}
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default ToDos;
