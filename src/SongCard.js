import React from "react";

export default function SongCard(props) {
  let { name, description, archived, created_at } = props.song;

  return (
    <div className="song-card">
      <p>{name}</p>
      <p>{description}</p>
      <p>{archived ? "Archived" : "Active"}</p>
      <p>{relativeCreatedAt}</p>
    </div>
  );
}
