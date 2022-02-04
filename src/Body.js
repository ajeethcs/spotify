import React from "react";
import "./Body.css";
import { useDatalayerValue } from "./Datalayer";
import Header from "./Header";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }] = useDatalayerValue();

  return (
    <div className="body">
      <Header spotify={spotify}></Header>
      <div>
        <div className="body_info">
          <img src={discover_weekly?.images[0].url} alt="Album cover" />
          <div className="body_infotext">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p> {discover_weekly?.description} </p>
          </div>
        </div>
        <div className="body_songs">
          <div className="body_icons">
            <PlayCircleFilledOutlinedIcon className="body_shuffle" />
            <FavoriteIcon className="love" fontSize="large" />
            <MoreHorizIcon />
          </div>
        </div>

        <div className="fade"></div>
        <div className="songs">
          {discover_weekly?.tracks.items.map((item) => (
            <SongRow track={item.track} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
