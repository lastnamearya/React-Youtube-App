import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handeSubmit}>
        <input
          type="text"
          placeholder="Search a YouTube video..."
          onChange={this.handleChange}
        />

        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Searchbar;
