import { useState } from 'react';
import './App.css';

import Wrapper from './components/UI/Wrapper';
import SearchBar from './components/Search/SearchBar';
import ResetStyle from './components/styled/Reset';
import Meals from './components/Meals/Meals';
import MealForm from './components/Meals/MealForm';

function App() {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState(null);
  const [title, setTitle] = useState('');

  const getMeals = async mealPhrase => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealPhrase}`
    );
    const data = await response.json();
    // console.log(data.meals);
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
        key: meal.strMeal,
      });
    }
    setMeals(searchedMeals);
    setTitle(`Results for ${mealPhrase}:`);
    setMeal(null);
    console.log(meals);
  };

  const errorHandler = () => {
    setTitle('Type Something !');
  };

  const setMealHandler = name => {
    setMeal(meals.filter(meal => meal.name === name));
    setTitle('');
  };

  const backHandler = () => {
    setMeal(null);
  };

  return (
    <Wrapper>
      <ResetStyle />
      <SearchBar search={getMeals} onError={errorHandler} />
      <h2>{title && title}</h2>
      {!meal && <Meals meals={meals} setChosenMeal={setMealHandler} />}
      {meal && <MealForm back={backHandler} meal={meal} />}
    </Wrapper>
  );
}

export default App;
