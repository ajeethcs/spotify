import React from "react";
import "./Header.css";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar } from "@mui/material";
import { useDatalayerValue } from "./Datalayer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header({ spotify }) {
  const [{ user }] = useDatalayerValue();
  return (
    <div className="header">
      <div className="header_left">
        {/* <SearchOutlinedIcon /> */}
        {/* <input placeholder="Search For Artists,Songs," type="text" /> */}
      </div>

      <div className="header_right">
        <Avatar
          className="avatar"
          src={user?.images[0]?.url}
          alt={user?.display_name}
        />
        <h4>{user?.display_name}</h4>
        <ArrowDropDownIcon className="arrow" />
      </div>
    </div>
  );
}

export default Header;
