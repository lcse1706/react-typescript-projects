import React from 'react';
import styled from 'styled-components';
import Section from '../UI/Section';

import TaskForm from './TaskForm';

const Tasks = props => {
  const deleteTaskHandler = key => {
    props.deleteTaskHandler(key);
  };

  let content = 'No tasks found. Add some !';

  if (props.error) {
    content = <button onClick={props.onFetch}>Try Agian</button>;
  }

  if (props.items.length > 0) {
    content = (
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
  }

  return <Section>{content}</Section>;
};

export default Tasks;
