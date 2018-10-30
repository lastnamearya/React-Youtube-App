import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";
import ReactPlayer from "react-player";

class Player extends Component {
  // static propTypes = {
  //   url: PropTypes.string
  // };

  // static defaultProps = {
  //   url: "https://www.youtube.com/watch?v=kz3nVya45uQ"
  // };

  render() {
    return (
      <div>
        {this.props.url.length > 0 ? (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${
              this.props.url[0].id.videoId
            }`}
            className="Player"
          />
        ) : (
          <Loading />
        )}
      </div>
      // <ReactPlayer
      //   url={
      //     searchList.length === 5
      //       ? "https://www.youtube.com/watch?v=kz3nVya45uQ"
      //       : "Loading"
      //   }
      //   className="Player"
      // />
    );
  }
}

export default Player;
