import React from 'react';

const TaskForm = props => {
  const deleteTaskHandler = () => {
    console.log(props.item.key);
    props.deleteTaskHandler(props.item.key);
  };

  return (
    <li>
      {props.item.text} <button onClick={deleteTaskHandler}>X</button>
    </li>
  );
};

export default TaskForm;
