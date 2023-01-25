import React from "react";
import "./HomePage.css";

import ProfileChange from "../../components/ProfilePictures/ProfileChange";

import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { ExperienceItems } from "../../components/ExperienceCard/ExperienceItems";

import ProjectSlider from "../../components/ProjectHomePage/ProjectSlider";
import { ProjectItems } from "../../components/ProjectCard/ProjectItems";

export default function HomePage() {
  return (
    <div className="padding-top-70px">
      <div className="home-profile">
        <div className="flex-container">
          <div className="flex-container">
            <h1 className="home-name">Hejin Jeong</h1>
            <div className="profile-links-mobile">
              <ProfileChange />
              <div className="home-profile-logos">
                <a
                  href="https://github.com/hejin-jeong"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                >
                  <i
                    class="fa fa-github footer-logos home-logos"
                    aria-hidden="true"
                  ></i>
                </a>
                <a href="mailto:pearlofthesea25@gmail.com" title="Gmail">
                  <i class="fa fa-envelope footer-logos home-logos"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/hejin-jeong/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <i class="fa fa-linkedin footer-logos home-logos"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="margin-left-20px">
            <h2 className="font-roboto">A Software Engineer</h2>
            <p className="margin-bottom-20px">
              I love learning new ⚡technologies and 🌻cultures. With my skills
              and knowledge, I aspire to create 💫social impacts.
            </p>
            <a className="home-button" href="/aboutme">
              More About Me
            </a>
          </div>
        </div>

        <div className="home-catchup">
          <h3 className="home-catchup-font">Catch up with me:</h3>
          <p className="home-catchup-font">
          Finalizing my college life👩‍🎓. Learning OS, NLP, Kotlin, React-Native, and C++.
          </p>
          <p className="home-catchup-update">Updated Dec 19th, 2022</p>
        </div>
      </div>

      <div className="home-experience">
        <h2 className="home-experience-title">Experience</h2>
        <div className="flex-container-col margin-bottom-50px">
          {ExperienceItems.slice(0, 3).map((item) => {
            return <ExperienceCard key={item.id} {...item} home={true} />;
          })}
        </div>
        <a className="home-button" href="/experience">
          More Experience
        </a>
      </div>

      <div className="home-project">
        <h2 className="home-project-title">Projects</h2>
        <div>
          <ProjectSlider slides={ProjectItems.sort((a, b) => b.date - a.date).slice(0, 3)} />
        </div>
        <a className="home-button project-button" href="/project">
          More Projects
        </a>
      </div>
    </div>
  );
}
