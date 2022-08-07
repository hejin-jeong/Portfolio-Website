import React from "react";
import "./ProjectPage.css";
import { ProjectPageCardContents } from "../components/ProjectPageCardContents";
import ProjectPageCard from "../components/ProjectPageCard";

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
                  img={item.img}
                  title={item.title}
                  content={item.content}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
