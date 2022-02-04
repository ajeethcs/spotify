import React, { useEffect, useState } from "react";
import "./Footer.css";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Grid, Slider } from "@material-ui/core";
import { useDatalayerValue } from "./Datalayer";

function Footer() {
  return (
    //////////////////////////////////////////////////////////
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumLogo"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/602f4731226337.5646928c3633f.jpg"
          alt=""
        />
        <div className="footer_songInfo">
          <h4>Song...</h4>
          <p>Usher</p>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////// */}
      <div className="footer_center">
        <ShuffleOutlinedIcon className="footer_green" />
        <SkipPreviousOutlinedIcon className="footer_icon" />
        <PlayCircleOutlinedIcon fontSize="large" className="footer_icon" />
        <SkipNextOutlinedIcon className="footer_icon" />
        <RepeatOutlinedIcon className="footer_green" />
      </div>
      {/* ////////////////////////////////////////////////////// */}
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
      {/* /////////////////////////////////////////////////////// */}
    </div>
  );
}

export default Footer;
