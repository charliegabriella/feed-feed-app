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
    const mealid = this.props.match.params.mealId;
    //Passing ID through/Making a matching Link, step 3. Made a variable so we can oproepen
    console.log("this is", mealid);
    const response = await fetch(
      //Passing ID through/Making a matching Link step 4: fetch the variable en sla deze op in deze link
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
      //
    );
    const parsedResponse = await response.json();
    console.log("is the parsed respone", parsedResponse);
    const specificMeal = [parsedResponse.meals[0]]; //Step 5. Put the fetched data in an array in an variable.
    //Dit doen we omdat we dit in een array willen zetten. In specific meal zit nu een object.
    //het heet meals omdat het de eerste property is van de parsedResponse (dus dat zit in de API).We willen dus alleen
    //meals van de parsedResponse.

    this.setState({ loading: false, data: specificMeal }); //nu wordt specific meal in 'Data' gezet. En  met
    //data kunnen we alles veranderen op de pagina. We put the data in the state, because when the render starts
    //it checks what's new about the state. The data changes, because every time there is a new recipe passed into it.
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
