import React from "react";
import "./App.css";
import MyFeed from "./components/myfeed";

function App() {
  return (
    <div className="wholepage">
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
