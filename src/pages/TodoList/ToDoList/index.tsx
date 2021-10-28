import { Key } from "react";
import ToDoItem from "../ToDoItem";
import "./ToDoList.css";

const ToDoList = (props:any) => {
  if (props.items.length === 0) {
    return <h2 className="toDos-list__fallback">Found no toDos.</h2>;
  }
  return (
    <ul className="toDos-list">
      {props.items.map((toDo: { id: Key | null | undefined; title: any; date: any; }) => (
        <ToDoItem key={toDo.id} title={toDo.title} date={toDo.date} />
      ))}
    </ul>
  );
};
export default ToDoList;
