import React from "react";
import "./App.css";
import MyFeed from "./components/myfeed";
import AddUser from "./components/AddUser";
import Logo from "./images/logo_transparent.png";
import RecipePage from "./components/recipepage";
import { Route } from "react-router-dom"; //step 5

function App() {
  return (
    <div className="wholepage">
      <header className="Header">
        <p>Our first header</p>
        <AddUser />
        <div className="headerLeft">
          <img src={Logo} alt="website logo" id="logo" />
        </div>
        <div className="headerRight">
          <p>Random Recipe Repository .powered by themealDB</p>
        </div>
      </header>
      <main>
        <div className="mainLeft"></div>
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
