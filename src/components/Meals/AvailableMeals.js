import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const availableMeal = "https://react-http-40cc3-default-rtdb.firebaseio.com/meals.json";
      const response = await fetch(availableMeal);
      const responseData = await response.json();
      
      if(!response.ok) {
        throw new Error('Something went wrong !');
      }

      const loadedMeals = [];

      for(const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    }

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });

  }, [])

  if(isLoading) {
    return <section className={classes.MealLoading}>
      <p>Loading...</p>
    </section>
  }

  if(error) {
    return <section className={classes.MealError}>
      <p>{error}</p>
    </section>
  }

  const mealsList = meals.map(meal => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);

  return (
  <section className={classes.meals}>
    <Card>
      <ul> {mealsList} </ul>
    </Card>
  </section>
  );
}

export default AvailableMeals;