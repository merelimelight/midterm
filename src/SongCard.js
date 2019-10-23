import React from "react";
import moment from "moment";

export default function SongCard(props) {
  let { name, description, archived, created_at } = props.song;
  let relativeCreatedAt = moment(created_at).fromNow();

  return (
    <div className="song-card">
      <p>{name}</p>
      <p>{description}</p>
      <p>{archived ? "Archived" : "Active"}</p>
      <p>{relativeCreatedAt}</p>
    </div>
  );
}
