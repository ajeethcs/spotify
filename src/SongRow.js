import React from "react";
import "./SongRow.css";

function SongRow({ track }) {
  return (
    <div className="song_row">
      <img src={track?.album?.images[0]?.url} alt={track.name} />
      <div className="songRow_info">
        <h1>{track.name} </h1>
        <p>
          {track.artists.map((obj) => obj.name).join(", ")} - {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
