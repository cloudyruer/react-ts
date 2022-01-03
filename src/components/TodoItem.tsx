const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

// const TodoItem = ({ text }: { text: string }) => {
//   return <li>{text}</li>;
// };

export default TodoItem;
