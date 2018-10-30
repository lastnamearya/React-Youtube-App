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
    this.props.changeSearch(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          // value={this.state.value}
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
