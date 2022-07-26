import React from "react";
import "./AboutMePage.css";
import ProfileChange from "../components/ProfileChange";

export default function AboutMePage() {
  return (
    <div className="padding-top-70px about-page">
      <h1 className="about-name">Hejin Jeong</h1>
      <p className="pronunciation">[ heh-jin ] &emsp; [ jung ]</p>
      <ProfileChange />

      <div className="about-life">
        <h2>Life</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="about-swe">
        <h2>Software Engineer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="flex-container">
        <div className="about-edu">
          <h2>Education</h2>
          <p>Mount Holyoke College</p>
        </div>
        <div className="about-skills">
          <h2>Skills</h2>
          <p>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>ReactJS</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
