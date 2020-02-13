import React from "react";
import "./Likes.css";

export default class LikeCounter extends React.Component {
  state = {
    numLikes: 0
  };
  increment = () => {
    this.setState({
      numLikes: this.state.numLikes + 1
    });
  };

  decrement = () => {
    this.setState({
      numLikes: this.state.numLikes - 1
    });
  };
  render() {
    return (
      <div className="likeElement">
        <div className="Display">
          <b>{this.state.numLikes}</b> likes!
        </div>
        <div className="arrow-up" onClick={this.increment}></div>
        <div className="arrow-down" onClick={this.decrement}></div>
      </div>
    );
  }
}
