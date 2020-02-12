import React from "react";
import "./Card.css";
import MyFeed from "./myfeed";
export default class RecipeCard extends React.Component {
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
