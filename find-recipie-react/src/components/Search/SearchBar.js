import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const Form = styled.form``;

const SearchBar = () => {
  const mealInputPhrase = useRef();

  const mealFinderHandler = e => {
    e.preventDefault();
    console.log(mealInputPhrase.current.value);
  };

  return (
    <Form onSubmit={mealFinderHandler}>
      <label>Meal Finder</label>
      <input type='text' ref={mealInputPhrase}></input>
      <Button label='Search' />
    </Form>
  );
};

export default SearchBar;
