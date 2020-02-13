import React from "react";
import "./App.css";
import MyFeed from "./components/myfeed";
import Logo from "./images/logo_transparent.png";

function App() {
  return (
    <div className="wholepage">
      <header className="Header">
        <div className="headerLeft">
          <img src={Logo} alt="website logo" id="logo" />
        </div>
        <div className="headerRight">
          <p>Random Recipe Repository</p>
        </div>
      </header>
      <main>
        <div className="mainLeft"></div>
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
