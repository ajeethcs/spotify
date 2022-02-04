import React from "react";
import "./SidebarOption.css";

function sidebarOption(props) {
  return (
    <div className="sidebarOption">
      {props.Icon && <props.Icon className="sidebarOption_icon" />}
      {props.Icon ? <h4>{props.title} </h4> : <p>{props.title} </p>}
    </div>
  );
}

export default sidebarOption;
