import ToDoForm from "../ToDoForm";
import "./NewToDo.css";

type Props = {
  onAddToDo: (arg: any) => void;
};

const NewToDo = (props: Props) => {
  const saveToDoDataHandler = (enteredToDoData: any) => {
    const toDoData = {
      ...enteredToDoData,
      id: Math.random().toString(),
    };
    props.onAddToDo(toDoData);
  };

  return (
    <div className="newToDo">
      <ToDoForm onSaveToDoData={saveToDoDataHandler} />
    </div>
  );
};

export default NewToDo;
