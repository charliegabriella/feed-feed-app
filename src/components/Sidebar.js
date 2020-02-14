import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div className="firstbutton">
          <button id="firstbutton">
            <Link id="linktofirstbutton" to="/ProfilePage/test">
              Profile Page
            </Link>
          </button>
        </div>
        <div className="secondbutton">
          <Link to="/LoginPage/test">Login Page</Link>
        </div>
      </div>
    );
  }
}
