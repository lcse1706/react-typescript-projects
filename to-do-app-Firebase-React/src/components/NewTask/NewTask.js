import { useRef, useState } from 'react';

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
    margin: 2rem;
    font-size: 1.5rem;
  }

  & input {
    flex-grow: 1;
    padding: 5px;
  }

  & button {
    display: inline-block;
    padding: 5px 10px;
    margin-left: 0.5rem;
    cursor: pointer;
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
    <FormControl onSubmit={submitHandler}>
      <label htmlFor='task'>To Do APP</label>
      <input
        placeholder='Type task'
        type='text'
        id='task'
        ref={taskInputRef}
      ></input>
      <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
      <ErrorMessage message={errorMessage} />
    </FormControl>
  );
};

export default NewTask;
