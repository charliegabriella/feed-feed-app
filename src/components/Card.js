import React from "react";
import "./Card.css";
import LikeCounter from "./Likes";
export default class RecipeCard extends React.Component {
  render() {
    return (
      // displays box that is divided n two sizes with image and recipe information
      <div className="recipecard">
        {/* left side of box with image */}
        <div className="colleft">
          <img src={this.props.imageUrl} alt="" />
        </div>
        {/* right side of box with information and links*/}
        <div className="colright">
          <div className="top">
            <h2>{this.props.title}</h2>
          </div>
          <div className="middle"></div>
          <div className="bottom">
            <div className="bottomLeft">
              <p>{this.props.description} cuisine</p>
            </div>
            <div className="bottomRight">
              <LikeCounter />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
