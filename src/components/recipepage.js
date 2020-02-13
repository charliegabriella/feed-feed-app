import React from "react";
import { Link } from "react-router-dom";

export default class RecipePage extends React.Component {
  render() {
    return (
      <div className="recipePage">
        <h1>Hi there</h1>
        <Link to="/">go bACK to InDex</Link>
      </div>
    );
  }
}
