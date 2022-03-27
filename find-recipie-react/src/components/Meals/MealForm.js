import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const MealInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h2 {
    margin: 3.5rem 0 2.5rem 0;
  }

  & img {
    width: 50%;
    margin-bottom: 2.5rem;
  }

  & ul {
    width: 100%;
    text-align: left;
    list-style: inside;
    margin-bottom: 2.5rem;
  }
  & p {
    text-indent: 2rem;
    margin-bottom: 2.5rem;
  }

  & Button {
    transform: scale(1.2);
  }
`;

const MealForm = props => {
  const backHandler = e => {
    e.preventDefault();
    props.back();
  };

  const meal = props.meal[0];
  return (
    <MealInfo>
      <h2>{meal.name}</h2>
      <img src={meal.img}></img>
      <ul>
        {meal.ingredients.map(ing => (
          <li key={ing}>{ing}</li>
        ))}
      </ul>
      <p>{meal.text}</p>
      <Button type='button' label='Back' onClick={backHandler} />
    </MealInfo>
  );
};
export default MealForm;
