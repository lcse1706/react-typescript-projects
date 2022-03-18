import { useRef, useState } from 'react';

import Section from '../UI/Section';
import styled from 'styled-components';
import ErrorMessage from '../UI/ErrorMessage';

const FormControl = styled.form`
  display: flex;
  flex-wrap: wrap;
  transition: ease 0.3s;

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
  const [errorMessage, setErrorMessage] = useState(false);
  const taskInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    if (taskInputRef.current.value.trim() === '') {
      setErrorMessage('Please type your task !');
      setTimeout(() => setErrorMessage(false), 1900);
      return;
    }

    const enteredValue = {
      text: taskInputRef.current.value,
    };
    props.addTaskHandler(enteredValue);
    taskInputRef.current.value = '';
  };

  return (
    <Section>
      <FormControl onSubmit={submitHandler}>
        <label htmlFor='task'>Task Name</label>
        <input type='text' id='task' ref={taskInputRef}></input>
        <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
        {/* {errorInput && (
          <ErrorMessage errorInput={errorInput} message={errorMessage} />
        )} */}
        <ErrorMessage message={errorMessage} />
      </FormControl>
    </Section>
  );
};

export default NewTask;
