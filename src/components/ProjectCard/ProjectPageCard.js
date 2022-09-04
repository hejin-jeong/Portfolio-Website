import React, { useState } from "react";
import "./ProjectPageCard.css";
import { ProjectPopup } from "./ProjectPopup";

export default function ProjectPageCard({ img, title, content, github }) {
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
              <h1> {title}</h1>
              <img
                className="project-content-img"
                src={img}
                alt="wordle game"
              ></img>
              <div className="project-content">{content}</div>
              <a className="" href={github} target="_blank" rel="noreferrer" title="Github Repository">
                <i class="fa fa-github project-github" aria-hidden="true"></i>
              </a>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
