import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
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
      // displays box that is divided n two sizes with image and recipe information
      <div className="recipecard">
        {/* left side of box with image */}
        <div className="colleft">
          <Link to="/recipepage/test">
            <img src={this.props.imageUrl} alt="" />
          </Link>
        </div>
        {/* right side of box with information and links*/}
        <div className="colright">
          <div className="top">
            <h3>{this.props.title}</h3>
          </div>
          <div className="middle">
            <p>{this.props.instructions}</p>
          </div>
          <div className="bottom">
            <div className="bottomLeft">
              <p>{this.props.description} cuisine</p>
            </div>
            <div className="bottomRight">{this.props.likes}</div>
          </div>
        </div>
      </div>
    );
  }
}
