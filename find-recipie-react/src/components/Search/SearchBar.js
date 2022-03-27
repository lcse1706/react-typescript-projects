import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const Form = styled.form`
  width: 100%;
  text-align: center;

  & h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  & input {
    font-size: 1rem;
    padding: 0.5rem;
    width: 40%;
    border-radius: 5px;
  }

  & input:focus {
    outline: none;
  }

  & .error {
    border: 3px solid red;
    background-color: #f67f48;
  }
`;

const SearchBar = props => {
  const mealInputPhrase = useRef();
  const [error, setError] = useState(false);

  const mealFinderHandler = e => {
    e.preventDefault();

    if (mealInputPhrase.current.value.trim() === '') {
      // setError(true);
      props.onError();
      mealInputPhrase.current.value = '';
      return;
    }

    props.search(mealInputPhrase.current.value);
    mealInputPhrase.current.value = '';
    setError(false);
  };

  return (
    <Form onSubmit={mealFinderHandler}>
      <h1>Meal Finder</h1>
      <input
        className={props.error ? 'error' : undefined}
        type='text'
        placeholder='Type dish or ingredient...'
        ref={mealInputPhrase}
      ></input>
      <Button label='Search' />
    </Form>
  );
};

export default SearchBar;
