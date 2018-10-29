import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

class Player extends Component {
  static propTypes = {
    url: PropTypes.string
  };

  static defaultProps = {
    url: "https://www.youtube.com/watch?v=kz3nVya45uQ"
  };

  render() {
    return <ReactPlayer url={this.props.url} className="Player" />;
  }
}

export default Player;
