import React from 'react';

import './ToDosFilter.css';

const ToDosFilter = (props:any) => {
  const dropdownChangeHandler = (event:any) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='toDos-filter'>
      <div className='toDos-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ToDosFilter;