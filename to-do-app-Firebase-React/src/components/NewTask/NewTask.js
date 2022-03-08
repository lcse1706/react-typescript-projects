import { useRef } from 'react';

import Section from '../UI/Section';
import styled from 'styled-components';

const FormControl = styled.form`
  display: flex;
  flex-wrap: wrap;

  & label {
    width: 100%;
    text-align: center;
    font-weight: 700;
  }

  & input {
    flex-grow: 1;
  }

  & button {
    display: inline-block;
  }
`;

const NewTask = props => {
  const taskInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    console.log(enteredValue);
  };

  return (
    <Section>
      <FormControl onSubmit={submitHandler}>
        <label htmlFor='task'>Task Name</label>
        <input type='text' id='task' ref={taskInputRef}></input>
        <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
      </FormControl>
    </Section>
  );
};

export default NewTask;
