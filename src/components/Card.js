import React from "react";
import "./Card.css";
import MyFeed from "./myfeed";
export default class RecipeCard extends React.Component {
  addUser = name => {
    const user = {
      id: Math.round(Math.random() * 100000),
      name,
      score: 0
    };
    this.setState({
      players: this.state.players.concat(user)
    });
  };

  render() {
    return (
      <div className="recipecard">
        <div className="colleft">
          links
          {/* <img src={this.props.imageUrl} alt="" /> */}
        </div>
        <div className="colright">
          <MyFeed />
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
