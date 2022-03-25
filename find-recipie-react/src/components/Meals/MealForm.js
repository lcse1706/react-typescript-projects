import React from 'react';
import styled from 'styled-components';

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
  }
`;

const MealForm = props => {
  const meal = props.meal[0];
  console.log(meal);
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
    </MealInfo>
  );
};
export default MealForm;
