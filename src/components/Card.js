import React from "react";
export default class RecipeCard extends React.Component {
  render() {
    return (
      <div className="recipe card">
        <div className="row">
          <div className="col half">
            <img src={this.props.imageUrl} />
          </div>
          <div className="col half">
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
