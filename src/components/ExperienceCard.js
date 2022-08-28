import React, { useState } from "react";
import "./ExperienceCard.css";

export default function ExperienceCard({
  title,
  employer,
  date,
  url,
  role,
  role2,
  role3,
}) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleExperience = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="experience-container">
      <div className="experience-card-box" onClick={toggleExperience}>
        <div className="experience-date-employer">
          <p className="experience-card-date">{date}</p>
          <p className="experience-card-content">
            <a
              className="link-non-decoration employer"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <strong>{employer}</strong>
            </a>{" "}
            <div>
              <i>{title}</i>
            </div>
          </p>
        </div>
        <i
          className={
            isClicked ? "fa fa-chevron-up arrow" : "fa fa-chevron-down arrow"
          }
        ></i>
      </div>

      <div
        className={isClicked ? "experience-clicked" : "experience-not-clicked"}
      >
        <p>{role}</p>
        <p>{role2}</p>
        <p>{role3}</p>
      </div>
    </div>
  );
}
