import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import MyFeed from "./components/myfeed";
import AddUser from "./components/AddUser";
import Logo from "./images/logo_transparent.png";
<<<<<<< HEAD
import { Route } from "react-router-dom";
=======
import RecipePage from "./components/recipepage";
import { Route } from "react-router-dom"; //step 5
>>>>>>> 1af0be46ae8cb0b0e56b97f16be9a0bb316672d5

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
          <p>Random Recipe Repository .powered by themealDB</p>
        </div>
      </header>
      <main>
        <div className="mainLeft">
          <AddUser />
        </div>
        <div className="mainRight">
          <Route exact path="/" component={MyFeed} />
          {/* step 6 */}
          <Route path="/recipepage/:mealId" component={RecipePage} />
          {/* step 7 --> now go to recipe page */}
        </div>
      </main>
      <footer>
        <p>Trademarked.</p>
      </footer>
    </div>
  );
}

export default App;
