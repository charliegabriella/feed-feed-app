import React from "react";
import "./App.css";
import MyFeed from "./components/myfeed";
import Logo from "./images/logo_transparent.png";
import RecipePage from "./components/recipepage";
import { Route } from "react-router-dom"; //step 5
import ProfilePage from "./components/ProfilePage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className="wholepage">
      <header className="Header">
        <div className="headerLeft">
          <img src={Logo} alt="website logo" id="logo" />
        </div>
        <div className="headerRight"></div>
      </header>
      <main>
        <div className="mainLeft"></div>
        <div className="mainRight">
          <Route path="/ProfilePage/:iets" component={ProfilePage} />
          <Route path="/LoginPage/:ietsanders" component={LoginPage} />
          <Route exact path="/" component={MyFeed} />
          {/* step 6 */}
          <Route path="/recipepage/:mealId" component={RecipePage} />
          {/* step 7 --> now go to recipe page */}
          {/* Routing URL Step 1: Every card that we made, has now link to its image. The image is the link.  The mealid wordt het url. The mealID vragen we op in component RecipePage in that file." */}
        </div>
      </main>
      <footer>
        <p>
          by Steven and Charlie, COPYRIGHT for us too! dont steal our shit,
          we'll find u, wooooord!{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
