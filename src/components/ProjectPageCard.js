import React, { useState } from "react";
import "./ProjectPageCard.css";
import { ProjectPopup } from "./ProjectPopup";

export default function ProjectPageCard({ img, title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="project-card-box">
        <img
          className="project-card-img"
          src={img}
          alt="project-demo"
          onClick={togglePopup}
        ></img>
      </div>
      {isOpen && (
        <ProjectPopup
          popupContent={
            <>
              <b> {title}</b>
              <p>{content}</p>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
