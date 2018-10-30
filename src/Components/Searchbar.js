import React, { Component } from "react";

class Searchbar extends Component {
  searchInput = React.createRef();

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.changeSearch(this.searchInput.current.value);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search a YouTube video..."
          ref={this.searchInput}
          // onChange={this.handleChange}
        />

        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Searchbar;
