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
          {/* {console.log(this.props.mealid)} */}
          <Link to={`/recipepage/${this.props.mealid}`}>
            {" "}
            {/*Passing ID through/Making a matching Link, Step 2: 
          Because every recipe has its own personal ID, you can use pass that ID to the URL. 
        The propID is now in an url. Now go to recipe page for Step 3! */}
            <img src={this.props.imageUrl} alt="" />
          </Link>
        </div>
        {/* right side of box with information and links*/}
        <div className="colright">
          <div className="top">
            <h3>{this.props.title}</h3>
          </div>
          <div className="middle">
            <Link to={`/ProfilePage/test`}>hallosteven</Link>
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

//when you set the path you set the placeholder (mealID), :mealID
//this.props.match.params.mealID
