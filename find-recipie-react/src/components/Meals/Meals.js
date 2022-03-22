import React from 'react';

const Meals = props => {
  return (
    <ul>
      {props.meals.map(meal => (
        <li>
          <p>{meal.name}</p>
          <img src={meal.img}></img>
        </li>
      ))}
    </ul>
  );
};

export default Meals;
