import React, { Component } from "react";
import Header from "./Components/Header";
import PlayerList from "./Components/Player";
import Searchbar from "./Components/Searchbar";
import searchYoutube from "youtube-api-search";
import "./App.css";

const YoutubeAPI = "AIzaSyB_AMcpW4h_F3BkYsxFYQnCRY2KDj09F5s";

class App extends Component {
  state = {
    search: "React Conf",
    results: []
  };

  handleSearch = searchTerm => {
    console.log(searchTerm);
  };

  searchResults = () => {
    searchYoutube(
      { key: YoutubeAPI, term: this.state.search },
      function(data) {
        console.log(data);
        this.setState({
          results: data
        });
      }.bind(this)
    );
  };

  componentDidMount() {
    this.searchResults();
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Searchbar changeSearch={this.handleSearch} />
        <PlayerList data={this.state.results} />
      </div>
    );
  }
}

export default App;
