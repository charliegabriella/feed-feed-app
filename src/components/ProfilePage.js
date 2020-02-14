import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Link to="/">go bAck t0 h000me</Link>
        <h1>Profile for: </h1>

        <ul>
          <li>Email address:</li>
        </ul>
      </div>
    );
  }
}
