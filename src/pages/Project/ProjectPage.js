import React from "react";
import "./ProjectPage.css";
import { ProjectPageCardContents } from "../../components/ProjectCard/ProjectPageCardContents";
import ProjectPageCard from "../../components/ProjectCard/ProjectPageCard";

export default function ProjectPage() {
  return (
    <div className="padding-top-70px project-page">
      <div className="home-experience">
        <h2 className="home-experience-title">Projects</h2>
        <div className="project-card-view">
          {ProjectPageCardContents.map((item, index) => {
            return (
              <>
                <ProjectPageCard
                  key={index}
                  {...item}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
