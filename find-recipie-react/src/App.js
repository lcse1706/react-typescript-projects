import { useState } from 'react';
import './App.css';

import Wrapper from './components/UI/Wrapper';
import SearchBar from './components/Search/SearchBar';
import ResetStyle from './components/styled/Reset';
import Meals from './components/Meals/Meals';

function App() {
  const [meals, setMeals] = useState([]);
  const [title, setTitle] = useState('');

  const getMeals = async mealPhrase => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealPhrase}`
    );
    const data = await response.json();
    console.log(data.meals);
    const searchedMeals = [];

    for (const meal of data.meals) {
      const ingredients = [];
      for (let i = 0; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredients.push(
            `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
          );
        }
      }
      // console.log(meal);

      searchedMeals.push({
        name: meal.strMeal,
        text: meal.strInstructions,
        img: meal.strMealThumb,
        ingredients,
      });
    }
    setMeals(searchedMeals);
    setTitle(mealPhrase);
    console.log(meals);
  };

  return (
    <Wrapper>
      <ResetStyle />
      <SearchBar search={getMeals} />
      <h2>{title && `Results for ${title}:`}</h2>
      <Meals meals={meals} />
    </Wrapper>
  );
}

export default App;
