import React from 'react';
import Card from '../Card';
import ToDoDate from '../ToDoDate';

import './ToDoItem.css';

const ToDoItem = (props:any) => {
  return (
    <Card className='toDo-item'>
      <ToDoDate date={props.date} />
      <div className='toDo-item__description'>
        <h2>{props.title}</h2>
      </div>
    </Card>
  );
}

export default ToDoItem;