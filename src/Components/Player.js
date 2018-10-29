import React, { Component } from "react";
import ReactPlayer from "react-player";

class Player extends Component {
  render() {
    return (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        className="Player"
      />
    );
  }
}

export default Player;
