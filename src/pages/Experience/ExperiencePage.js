import React from "react";
import "./ExperiencePage.css";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { ExperienceItems } from "../../components/ExperienceCard/ExperienceItems";

export default function ExperiencePage() {
  return (
    <div className="padding-top-70px experience-page">
      <div className="home-experience">
        <h2 className="home-experience-title">Experience</h2>
        <div className="flex-container-col">
          {ExperienceItems.map((item) => {
            return (
                <ExperienceCard
                key={item.id}
                {...item}
                home={false}
                />
            );
          })}
        </div>
      </div>
    </div>
  );
}


