import React from 'react';
import styled from 'styled-components';
import Section from '../UI/Section';

import TaskForm from './TaskForm';

const Tasks = props => {
  const deleteTaskHandler = key => {
    props.deleteTaskHandler(key);
  };
  return (
    <ul>
      {props.items.map(task => (
        <TaskForm
          key={task.key}
          item={task}
          deleteTaskHandler={deleteTaskHandler}
        />
      ))}
    </ul>
  );
};

export default Tasks;