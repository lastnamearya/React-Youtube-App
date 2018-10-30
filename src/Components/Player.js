import React, { Component } from "react";
import Loading from "./Loading";
import ReactPlayer from "react-player";

const PlayerList = props => {
  const data = props.data;
  return (
    <div>
      {data.length > 0 ? (
        data.map((key, index) => {
          return (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${key.id.videoId}`}
              className="Player"
              key={index}
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
