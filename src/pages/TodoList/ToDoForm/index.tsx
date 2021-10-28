import React, { useState } from 'react';

import './ToDoForm.css';

const ToDoForm = (props:any) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event:any) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event:any) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event:any) => {
    event.preventDefault();

    const toDoData = {
      title: enteredTitle,
      date: new Date(enteredDate),
    };

    props.onSaveToDoData(toDoData);
    setEnteredTitle('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-toDo__controls'>
        <div className='new-toDo__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-toDo__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-toDo__actions'>
        <button type='submit'>Add ToDo</button>
      </div>
    </form>
  );
};

export default ToDoForm;