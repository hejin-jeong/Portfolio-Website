import React from "react";
import "./ProjectPage.css";

import ProjectPageCardView from "../components/ProjectPageCardView";

export default function ProjectPage() {
  return (
    <div className="padding-top-70px">
      <div>
        <h2 className="home-experience-title">Projects</h2>
        <ProjectPageCardView />
      </div>
    </div>
  );
}
