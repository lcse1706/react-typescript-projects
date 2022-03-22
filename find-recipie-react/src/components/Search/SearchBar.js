import React, { useRef } from 'react';
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

  & Button {
    font-size: 1rem;
    padding: 0.5rem;
    margin-left: 2rem;
    border-radius: 5px;
    background-color: #fff;
  }

  & Button:active {
    background-color: #eee;
  }
`;

const SearchBar = props => {
  const mealInputPhrase = useRef();

  const mealFinderHandler = e => {
    e.preventDefault();
    props.search(mealInputPhrase.current.value);
  };

  return (
    <Form onSubmit={mealFinderHandler}>
      <h1>Meal Finder</h1>
      <input
        type='text'
        placeholder='Type dish or ingredient...'
        ref={mealInputPhrase}
      ></input>
      <Button label='Search' />
    </Form>
  );
};

export default SearchBar;
