import React, { Component } from "react";
import Loading from "./Loading";
import ReactPlayer from "react-player";

const PlayerList = props => {
  const data = props.data;

  return (
    <div className="Player-List">
      {data.length > 0 ? (
        data.map(video => {
          return (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              className="Player"
              key={video.id.videoId}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default PlayerList;
