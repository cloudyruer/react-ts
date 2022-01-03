import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

// const TodoItem = ({ text }: { text: string }) => {
//   return <li>{text}</li>;
// };

export default TodoItem;
