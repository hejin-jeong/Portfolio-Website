import React from "react";
import "./AboutMePage.css";
import ProfileChange from "../../components/ProfilePictures/ProfileChange";

export default function AboutMePage() {
  return (
    <div className="padding-top-70px about-page">
      <h1 className="about-name">Hejin Jeong</h1>
      <p className="pronunciation">[ heh-jin ] &emsp; [ jung ]</p>
      <ProfileChange />

      <div className="about-life">
        <h2 className="about-title-font">Life</h2>
        <p className="pearl">
          <em>"Pearl of the Sea"</em>
        </p>
        <p className="long-text">
          In my name, 'He' stands for the sea and 'jin' refers to the pearl and
          genuineness. I live my life as wide as the sea, deep as the sea,
          active as the sea, and calm as the sea. I want my pearl to be genuine
          and honest. As I am the pearl of my sea, everyone is the pearl of
          their sea. What do you want your pearl to be?
        </p>
      </div>
      <div className="about-swe">
        <h2 className="about-title-font">Software Engineer</h2>
        <p className="long-text">
          I have long been interested in pursuing social values that improve the
          quality of life. To convert my ideas into action, I try to help others
          who need my knowledge and skills by volunteering, working as a TA, and
          mostly, building web/mobile platforms that provide what users want.
          Throughout my lifelong CS journey, I aspire to create innovative
          social impacts and provide reliable spaces where people can achieve
          what they want.
        </p>
      </div>

      <div className="about-edu-skills">
        <div>
          <div className="about-edu">
            <h2 className="about-title-font">Education</h2>
            <ul className="long-text margin-bottom-1rem">
              <li>Mount Holyoke College '23</li>
            </ul>
          </div>
          <div className="about-love">
            <h2 className="about-title-font">Interests</h2>
            <ul className="long-text">
              <li>Fullstack development</li>
              <li>Mobile development</li>
              <br />
              <li>Travelling</li>
              <li>
                Sports: Badminton, Volleyball, Bouldering, Cycling, Hiking
              </li>
            </ul>
          </div>
        </div>
        <div className="about-skills">
          <h2 className="about-title-font">Skills</h2>
          <div className="grid-container">
            <div className="grid-skill">Python</div>
            <div className="grid-level">●●●●●</div>
            <div className="grid-skill">Java</div>
            <div className="grid-level">●●●●○</div>
            <div className="grid-skill">ReactJS</div>
            <div className="grid-level">●●●○○</div>
            <div className="grid-skill">JavaScript</div>
            <div className="grid-level">●●●○○</div>
            <div className="grid-skill">HTML/CSS</div>
            <div className="grid-level">●●●●●</div>
            <div className="grid-skill">C#</div>
            <div className="grid-level">●●●○○</div>
            <div className="grid-skill">SQL</div>
            <div className="grid-level">●●●○○</div>
            <div className="grid-skill">React Native</div>
            <div className="grid-level">●●○○○</div>
            <div className="grid-skill">Swift</div>
            <div className="grid-level">●●○○○</div>
            <div className="grid-skill">R</div>
            <div className="grid-level">●●●●○</div>
            <div className="grid-skill">C</div>
            <div className="grid-level">●○○○○</div>
          </div>
        </div>
      </div>
    </div>
  );
}
