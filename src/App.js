import React, { Component } from "react";
import Header from "./Components/Header";
import Player from "./Components/Player";
import Searchbar from "./Components/Searchbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Player />
        <Searchbar />
      </div>
    );
  }
}

export default App;
