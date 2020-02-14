import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import MyFeed from "./components/myfeed";
import AddUser from "./components/AddUser";
import Logo from "./images/logo_transparent.png";
import RecipePage from "./components/recipepage";
import { Route } from "react-router-dom"; //step 5

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
        <Route path="/LoginPage/:ietsanders" component={LoginPage} />
        <div className="mainLeft">
          <AddUser />
        </div>
        <div className="mainRight">
          <Route path="/ProfilePage/:iets" component={ProfilePage} />
          <Route exact path="/" component={MyFeed} />
          {/* step 6 */}
          <Route path="/recipepage/:mealId" component={RecipePage} />
          {/* step 7 --> now go to recipe page */}
          {/* Routing URL Step 1: Every card that we made, has now link to its image. The image is the link.  The mealid wordt het url. The mealID vragen we op in component RecipePage in that file." */}
        </div>
      </main>
      <footer>
        <p>Trademarked.</p>
      </footer>
    </div>
  );
}

export default App;
