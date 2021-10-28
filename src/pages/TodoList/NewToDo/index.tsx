import React from 'react';
import ToDoForm from '../ToDoForm';

import './NewToDo.css';

type Props = {
    onAddToDo: (arg:any)=>void
}

const NewToDo = (props:Props) => {
  const saveToDoDataHandler = (enteredToDoData: any) => {
    const toDoData = {
      ...enteredToDoData,
      id: Math.random().toString()
    };
    props.onAddToDo(toDoData);
  };

  return (
    <div className='new-toDo'>
      <ToDoForm onSaveToDoData={saveToDoDataHandler} />
    </div>
  );
};

export default NewToDo