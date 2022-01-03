import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

// const TodoItem = ({ text }: { text: string }) => {
//   return <li>{text}</li>;
// };

export default TodoItem;
