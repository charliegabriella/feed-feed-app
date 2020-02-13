import React from "react";
import RecipeCard from "./Card";
import LikeCounter from "./Likes";
export default class MyFeed extends React.Component {
  // the initial state
  state = {
    loading: true,
    data: []
  };
  // ...
  componentDidMount = async () => {
    //Fetches the data from the API
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const parsedResponse = await response.json();

    const response2 = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const parsedResponse2 = await response2.json();

    const response3 = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const parsedResponse3 = await response3.json();

    const response4 = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const parsedResponse4 = await response4.json();

    const response5 = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const parsedResponse5 = await response5.json();

    const randomMeals = [
      //puts fetched data into an array of 5 different objects
      parsedResponse.meals[0],
      parsedResponse2.meals[0],
      parsedResponse3.meals[0],
      parsedResponse4.meals[0],
      parsedResponse5.meals[0]
    ];

    this.setState({ loading: false, data: randomMeals });
  };

  render() {
    //console.log(this.state.data.meals);
    //const mealNames = this.state.data.map(meal => meal.strMeal);
    //console.log(mealNames);
    //console.log(this.statedata);
    return this.state.data.map(meal => {
      return (
        console.log(meal.strArea),
        (
          <RecipeCard
            imageUrl={meal.strMealThumb}
            title={meal.strMeal}
            description={meal.strArea}
            instructions={meal.strInstructions}
            likes={<LikeCounter />}
          />
        )
      );
    });
  }
}
