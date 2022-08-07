import React, { useState } from "react";
import "./ExperienceCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExperienceCard({ title, employer, date, url, role }) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleExperience = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="experience-card-box">
      <p className="experience-card-date">{date}</p>
      <p className="experience-card-content">
        <a
          className="link-non-decoration"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <strong>{employer}</strong>
        </a>{" "}
        <i>{title}</i>
      </p>
      <div className="arrow-gallery-card" onClick={toggleExperience}>
                    <i className={isClicked? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'}></i>
                    <FontAwesomeIcon icon={isClicked? "fa-solid fa-angle-up" : 'fa-solid fa-angle-down'} />
                    <FontAwesomeIcon icon="fa-solid fa-angle-up" />
                </div>
        <div
          className={
            isClicked ? "experience-clicked" : "experience-not-clicked"
          }
        >
          <p>{role}</p>
        </div>
    </div>
  );
}
