import React from "react";
import "./ProjectPage.css";
import ProjectPageCard from "../../components/ProjectCard/ProjectPageCard";
import { ProjectItems } from "../../components/ProjectCard/ProjectItems";

export default function ProjectPage() {
  

  return (
    <div className="padding-top-70px project-page">
      <div className="home-experience">
        <h2 className="home-experience-title">Projects</h2>
        <div className="project-card-view">
          {ProjectItems.sort((a, b) => b.date - a.date).map(
            (item) => {
              return (
                <>
                  <ProjectPageCard key={item.id} {...item} />
                </>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
