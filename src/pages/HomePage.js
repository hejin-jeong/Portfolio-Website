import React from "react";
import "./HomePage.css";
import ProfileChange from "../components/ProfileChange";

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
                <a href="mailto: pearlofthesea25@gmail.com">
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
            <h2>A Software Engineer</h2>
            <p className="margin-bottom-20px">
              I love learning new ⚡technologies and 🌻cultures. With my skills
              and knowledge, I aspire to create 💫social impacts.
            </p>
            <a className="home-button" href="/aboutme">More About Me</a>
          </div>
        </div>

        <div className="home-catchup">
          <h3>Catch up with me:</h3>
          <p>Interning @ Bonterra for the summer!</p>
          <p className="home-catchup-update">Updated July 3rd, 2022</p>
        </div>
      </div>
      <div className="home-experience"></div>
      <div className="home-project"></div>
    </div>
  );
}
