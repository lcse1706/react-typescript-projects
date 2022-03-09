import React from 'react';
import styled from 'styled-components';
import Section from '../UI/Section';

import TaskForm from './TaskForm';

const Tasks = props => {
  return (
    <Section>
      <ul>
        {props.items.map(task => (
          <TaskForm key={task.key} item={task} />
        ))}
      </ul>
    </Section>
  );
};

export default Tasks;
