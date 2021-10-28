import React, { useState } from 'react'
import NewToDo from './NewToDo';
import ToDos from './ToDos';

const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


const TodoListComponent: React.FC = () => {
    const [toDos, setToDos] = useState(DUMMY_EXPENSES);
    const addTodoHandler = (toDo: { id: string; title: string; amount: number; date: Date; }) => {
      //update based on the previous state
      setToDos((prevToDos) => {
        return [toDo, ...prevToDos];
      });
    };
    return (<>
        <NewToDo onAddToDo={addTodoHandler} />
        <ToDos items={toDos} />

    </>)
}

export default TodoListComponent;