import React from "react";
import "./ProjectPopup.css";

export const ProjectPopup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.popupContent}
      </div>
    </div>
  );
};