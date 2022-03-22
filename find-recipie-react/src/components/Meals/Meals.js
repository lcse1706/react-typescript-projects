import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  list-style: none;

  & li {
    width: 22%;
    margin-top: 1rem;
    position: relative;
  }

  & img {
    width: 100%;
    height: 100%;
  }

  & .meal-info {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .meal-info h3 {
    pointer-events: none;
  }

  & .meal-info:hover {
    opacity: 1;
  }
`;

const Meals = props => {
  return (
    <List>
      {props.meals.map(meal => (
        <li>
          <div className='meal-info'>
            <h3>{meal.name}</h3>
          </div>
          <img src={meal.img}></img>
        </li>
      ))}
    </List>
  );
};

export default Meals;
