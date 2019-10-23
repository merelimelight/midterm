import React from "react";

export default function SongCard(props) {
  let { name, description } = props.song;

  return (
    <div className="song-card">
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
}
