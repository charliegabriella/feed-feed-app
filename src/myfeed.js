import React from "react";

export default class MyFeed extends React.Component {
  state = {
    recipe: []
  };

  componentDidMount() {
    fetch("https://themealdb.com/api/json/v1/1/random.php")
      .then(response => response.json())
      .then(data => {
        console.log("fetched data??", data);
        this.setState({ recipe: data });
      });
  }
  render() {
    return (
      <div>
        <p>{this.state.recipe.meals}</p>
      </div>
    );
  }
}
