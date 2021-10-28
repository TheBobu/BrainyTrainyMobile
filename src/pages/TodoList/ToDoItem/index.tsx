import Card from "../Card";
import ToDoDate from "../ToDoDate";

import "./ToDoItem.css";

const ToDoItem = (props: any) => {
  return (
    <Card className="toDoItem">
      <ToDoDate date={props.date} />
      <div className="toDoItemDescription">
        <h2>{props.title}</h2>
      </div>
    </Card>
  );
};

export default ToDoItem;
