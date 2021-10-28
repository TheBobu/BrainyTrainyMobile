import "./ToDoDate.css";

function ToDoDate(props: any) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="toDoDate">
      <div className="toDoDateMonth">{month}</div>
      <div className=" toDoDateDay">{day}</div>
      <div className="toDoDateYear">{year}</div>
    </div>
  );
}
export default ToDoDate;
