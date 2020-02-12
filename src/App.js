import React from "react";
import "./App.css";
import RecipeCard from "./components/Card";
import MyFeed from "./components/myfeed";

function App() {
  return (
    <div className="whole">
      <header className="Header">
        <p>Our first header</p>
      </header>
      <main>
        <div className="mainLeft">vertical navbar</div>
        <div className="mainRight">
          <MyFeed />
        </div>
      </main>
      <footer>
        <p>Footer!</p>
      </footer>
    </div>
  );
}

export default App;
