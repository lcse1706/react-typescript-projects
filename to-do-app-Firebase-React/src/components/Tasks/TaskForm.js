import React from 'react';

const TaskForm = props => {
  const deleteTaskHandler = event => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <li>
      {props.item.text} <button onClick={deleteTaskHandler}>X</button>
    </li>
  );
};

export default TaskForm;
