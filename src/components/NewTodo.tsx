import React, { useRef } from "react";

const NewTodo = () => {
  // init: null, we need to be explicit
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  //with help of React onSubmit property later
  // MouseEvent for mouse click for example
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // const enteredText = todoTextInputRef.current?.value;
    // NOTE if sure: exclamation mark instead of a question mark (will never be null)
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
