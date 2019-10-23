import React from "react";

export default function SongCard(props) {
  let { attributes } = props.song.data.attributes;

  let minutes = Math.floor(attributes.milliseconds / 60000);
  let seconds = ((attributes.milliseconds % 60000) / 1000).toFixed(0);

  return (
    <div className="song-card">
      <p>{attributes.name}</p>
      <p>
        {minutes} minutes and {seconds} seconds
      </p>
    </div>
  );
}
