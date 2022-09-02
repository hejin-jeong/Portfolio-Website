import React, { useState } from "react";
import "./ExperienceCard.css";

export default function ExperienceCard({
  props
}) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleExperience = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="experience-container">
      <div className="experience-card-box" onClick={toggleExperience}>
        <div className="experience-date-employer">
          <p className="experience-card-date">{props.date}</p>
          <p className="experience-card-content">
            <a
              className="link-non-decoration employer"
              href={props.url}
              target="_blank"
              rel="noreferrer"
            >
              <strong>{props.employer}</strong>
            </a>{" "}
            <div>
              <i>{props.title}</i>
            </div>
          </p>
        </div>
        <i
          className={
            isClicked ? "fa fa-chevron-up" : "fa fa-chevron-down"
          }
        ></i>
      </div>

      <div
        className={isClicked ? "experience-clicked"  + (props.home ? 'experience-home' : null) : "experience-not-clicked"}
      >
        <p>{props.role}</p>
        <p>{props.role2}</p>
        <p>{props.role3}</p>
        <p>{props.role4}</p>
      </div>
    </div>
  );
}
