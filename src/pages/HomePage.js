import React from "react";
import "./HomePage.css";
import ProjectCarousel from "../components/ProjectCarousel";
import ExperienceCard from "../components/ExperienceCard";
import ProfileChange from "../components/ProfileChange";
import { ExperienceItems } from "../components/ExperienceItems";

export default function HomePage() {
  return (
    <div className="padding-top-70px">
      <div className="home-profile">
        <div className="flex-container">
          <div className="flex-container">
            <h1 className="home-name">Hejin Jeong</h1>
            <div>
              <ProfileChange />
              <div className="home-profile-logos">
                <a
                  href="https://github.com/hejin-jeong"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-github footer-logos" aria-hidden="true"></i>
                </a>
                <a href="mailto:pearlofthesea25@gmail.com">
                  <i class="fa fa-envelope footer-logos"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/hejin-jeong/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-linkedin footer-logos"></i>
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
          <h3>Catch up with me:</h3>
          <p>
            Interning{" "}
            <span>
              <a
                className="link-non-decoration text-bold"
                href="https://www.bonterratech.com/"
                target="_blank"
                rel="noreferrer"
              >
                @ Bonterra
              </a>
            </span>{" "}
            for the summer!
          </p>
          <p className="home-catchup-update">Updated July 3rd, 2022</p>
        </div>
      </div>

      <div className="home-experience">
        <h2 className="home-experience-title">Experience</h2>
        <div className="flex-container-col margin-bottom-50px">
          {ExperienceItems.slice(0, 3).map((item) => {
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
        <a className="home-button" href="/experience">
          More Experience
        </a>
      </div>

      <div className="home-project">
        <h2 className="home-project-title">Projects</h2>
        <ProjectCarousel />
        <a className="home-button" href="/project">
          More Projects
        </a>
      </div>
    </div>
  );
}
