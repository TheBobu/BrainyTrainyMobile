import "./ToDoDate.css";

function ToDoDate(props:any){
    const month =  props.date.toLocaleString("en-US",{month:"long"});
    const day =  props.date.toLocaleString("en-US",{day:"2-digit"});
    const year =  props.date.getFullYear();
    return (
        <div className="toDo-date">
        <div  className="toDo-date__month">{month}</div>
        <div className=" toDo-date__day">{day}</div>
        <div  className="toDo-date__year">{year}</div>
        </div>
    );
}
export default ToDoDate;