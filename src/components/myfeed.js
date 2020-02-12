import React from "react";

export default class MyFeed extends React.Component {
  // the initial state
  state = {
    loading: true,
    data: "string"
  };
  // ...
  componentDidMount() {
    return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => res.json())
      .then(data => {
        console.log("did i fetch data?");
        console.log(data.meals[0].strMeal);
        this.setState({
          loading: false,
          data: data.meals[0].strMeal
        });
      });
    // (1) fetch some data (hopefully, something resembling a list of articles)
    // (2) put it in component local state (as per the shape discussed above)
    // (3) ...and if the loading fails, set an error state like discussed above
  }

  render() {
    console.log(this.state.data.meals);

    return (
      <div>
        <ul>{this.state.data}</ul>
      </div>
    );
  }
}
