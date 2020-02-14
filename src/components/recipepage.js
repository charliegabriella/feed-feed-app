import React from "react";
import { Link } from "react-router-dom"; //step 8, import { link }

export default class RecipePage extends React.Component {
  // the initial state
  state = {
    loading: true,
    data: []
  };
  // ...

  componentDidMount = async () => {
    const mealid = this.props.match.params.mealId; //
    console.log("this is", mealid);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}` //Step 3 (of passing ID through routing): Create these whole
    );
    const parsedResponse = await response.json();
    console.log("is the parsed respone", parsedResponse);
    const specificMeal = [parsedResponse.meals[0]];

    this.setState({ loading: false, data: specificMeal });
  };

  render() {
    return this.state.data.map(meal => {
      return (
        console.log(meal.strArea),
        (
          <div className="recipePage">
            <p>{meal.strInstructions}</p>
            <h1>Hi there one</h1>
            {console.log(this.state.data)}
            <p>{this.state.data.strArea}</p>
            <Link to="/">go bACK to InDex</Link>
            {/* step 9. this is the last stepppp!!! */}
          </div>
        )
      );
    });
  }
}
