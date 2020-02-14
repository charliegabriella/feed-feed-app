import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import MyFeed from "./components/myfeed";
import AddUser from "./components/AddUser";
import Logo from "./images/logo_transparent.png";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="wholepage">
      <Route exact path="/" component={ProfilePage} />
      <header className="Header">
        <p>Our first header</p>
        <div className="headerLeft">
          <img src={Logo} alt="website logo" id="logo" />
        </div>
        <div className="headerRight">
          <p>Random Recipe Repository</p>
        </div>
      </header>
      <main>
        <div className="mainLeft">
          <AddUser />
        </div>
        <div className="mainRight">
          <MyFeed />
        </div>
      </main>
      <footer>
        <p>Trademarked.</p>
      </footer>
    </div>
  );
}

export default App;
