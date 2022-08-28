import React from "react";
import "./ExperiencePage.css";
import ExperienceCard from "../components/ExperienceCard";
import { ExperienceItems } from "../components/ExperienceItems";

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
                  title={item.title}
                  employer={item.employer}
                  date={item.date}
                  url={item.url}
                  role={item.role}
                  role2={item.role2}
                  role3={item.role3}
                />
            );
          })}
        </div>
      </div>
    </div>
  );
}


