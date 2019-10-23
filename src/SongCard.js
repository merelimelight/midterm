import React from "react";

export default function SongCard(props) {
  let { attributes } = props.song.data.attributes;

  return (
    <div className="song-card">
      <p>{attributes.name}</p>
      <p>{attributes.milliseconds}</p>
    </div>
  );
}
