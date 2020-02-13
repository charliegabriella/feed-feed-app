import React from "react";
import "./App.css";
import LikeCounter from "./components/Likes";
import RecipeCard from "./components/Card";
import MyFeed from "./components/myfeed";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="whole">
      <header className="Header">
        <p>Our first header</p>
        <AddUser />
      </header>
      <main>
        <div className="mainLeft">vertical navbar</div>
        <div className="mainRight">
          Recept/Post: Social Buttons Comments
          <RecipeCard
            imageUrl={
              "https://indebuurt.nl/denbosch/wp-content/uploads/2017/08/dsc_0031-e1502361590539.jpg" //Image: always put the tiitle + description under it
            }
            title={"titel gerecht"}
            description={"omschrijving gerecht"}
          />
          <MyFeed />
          <LikeCounter />
        </div>
      </main>
      <footer>
        <p>Footer!</p>
      </footer>
    </div>
  );
}

export default App;
