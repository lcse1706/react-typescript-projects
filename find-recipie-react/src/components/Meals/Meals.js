import React from 'react';

const Meals = props => {
  return (
    <ul>
      {props.meals.map(meal => (
        <li>{meal.name}</li>
      ))}
    </ul>
  );
};

export default Meals;
