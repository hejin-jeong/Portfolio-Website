import React from "react";
import "./ProjectPage.css";
import ProjectPageCard from "../../components/ProjectCard/ProjectPageCard";
import wordle from "../../resources/images/wordle.png";
import mohoho from "../../resources/images/mohoho.png";
import mustseum from "../../resources/images/mustseum.png";
import quevec from "../../resources/images/quevec.png";
import emoods from "../../resources/images/emoods.png";

export default function ProjectPage() {
  const ProjectPageCardContents = [
    {
      date: new Date(2022, 4, 3),
      id: 220403,
      github: "https://github.com/hejin-jeong/Java-Wordle-Game",
      img: wordle,
      title: "Java GUI Wordle Game",
      content: (
        <>
          <h3>Description</h3>
          <p>
            This Wordle Game project was created using Java GUI. Basically, the
            wordle game is a word guessing game with a simple grid interface
            where users guess a word. I worked on this project with a group of 4
            during Software Design and Development course in Spring 2022. Our
            project's theme is fruit, so each guess must be a valid five-letter
            word related to fruit. I was in charge of constructing backend
            logic, especially checking the length of the input, comparing user
            input with the answer, displaying color on the grid depending on the
            user input, accumulating scores, and changing levels.
          </p>
          <br />
          <h3>Features</h3>
          <ul>
            <li>
              User can change the difficulty level. (7 attempts for easy, 6 for
              medium, 5 for hard)
            </li>
            <li>User can use physical keyboard as well as virtual keyboard.</li>
            <li>
              User can mute the music, start a new round, and exit the game.
            </li>
            <li>Keys of the letters not in the answer are disabled.</li>
            <li>
              Hints are provided through the color of the grid. (Green is a
              letter that exists in the correct position. Yellow is a letter
              that exists in the answer but is not in the correct position. Red
              is a letter that doesn't exist in the answer.)
            </li>
          </ul>
        </>
      ),
    },
    {
      date: new Date(2022, 3, 30),
      id: 220404,
      github: "https://github.com/MoHoMood/eMoods",
      name: "emoods",
      img: emoods,
      title: "eMoods iOS app",
      content: (
        <>
          <h3>Description</h3>
          <p>
            This Wordle Game project was created using Java GUI. Basically, the
            wordle game is a word guessing game with a simple grid interface
            where users guess a word. I worked on this project with a group of 4
            during Software Design and Development course in Spring 2022. Our
            project's theme is fruit, so each guess must be a valid five-letter
            word related to fruit. I was in charge of constructing backend
            logic, especially checking the length of the input, comparing user
            input with the answer, displaying color on the grid depending on the
            user input, accumulating scores, and changing levels.
          </p>
          <br />
          <h3>Features</h3>
          <ul>
            <li>
              User can change the difficulty level. (7 attempts for easy, 6 for
              medium, 5 for hard)
            </li>
            <li>User can use physical keyboard as well as virtual keyboard.</li>
            <li>
              User can mute the music, start a new round, and exit the game.
            </li>
            <li>Keys of the letters not in the answer are disabled.</li>
            <li>
              Hints are provided through the color of the grid. (Green is a
              letter that exists in the correct position. Yellow is a letter
              that exists in the answer but is not in the correct position. Red
              is a letter that doesn't exist in the answer.)
            </li>
          </ul>
        </>
      ),
    },
    {
      date: new Date(2022, 2, 3),
      id: 220405,
      github: "https://github.com/Dahejo/hackher413",
      url: "https://must-seum.web.app/",
      name: "mustseum",
      img: mustseum,
      title: "Must-seum React Web app",
      content: (
        <>
          <h3>Description</h3>
          <p>
            This Wordle Game project was created using Java GUI. Basically, the
            wordle game is a word guessing game with a simple grid interface
            where users guess a word. I worked on this project with a group of 4
            during Software Design and Development course in Spring 2022. Our
            project's theme is fruit, so each guess must be a valid five-letter
            word related to fruit. I was in charge of constructing backend
            logic, especially checking the length of the input, comparing user
            input with the answer, displaying color on the grid depending on the
            user input, accumulating scores, and changing levels.
          </p>
          <br />
          <h3>Features</h3>
          <ul>
            <li>
              User can change the difficulty level. (7 attempts for easy, 6 for
              medium, 5 for hard)
            </li>
            <li>User can use physical keyboard as well as virtual keyboard.</li>
            <li>
              User can mute the music, start a new round, and exit the game.
            </li>
            <li>Keys of the letters not in the answer are disabled.</li>
            <li>
              Hints are provided through the color of the grid. (Green is a
              letter that exists in the correct position. Yellow is a letter
              that exists in the answer but is not in the correct position. Red
              is a letter that doesn't exist in the answer.)
            </li>
          </ul>
        </>
      ),
    },
    {
      date: new Date(2022, 1, 30),
      id: 220406,
      github: "https://github.com/Dahejo/Quevac",
      url: "https://que-vac-dahejo.web.app/",
      memo: "(Recommend to set viewport to iPhone SE (375x667))",
      name: "quevec",
      img: quevec,
      title: "Quevec React app",
      content: (
        <>
          <h3>Description</h3>
          <p>
            This Wordle Game project was created using Java GUI. Basically, the
            wordle game is a word guessing game with a simple grid interface
            where users guess a word. I worked on this project with a group of 4
            during Software Design and Development course in Spring 2022. Our
            project's theme is fruit, so each guess must be a valid five-letter
            word related to fruit. I was in charge of constructing backend
            logic, especially checking the length of the input, comparing user
            input with the answer, displaying color on the grid depending on the
            user input, accumulating scores, and changing levels.
          </p>
          <br />
          <h3>Features</h3>
          <ul>
            <li>
              User can change the difficulty level. (7 attempts for easy, 6 for
              medium, 5 for hard)
            </li>
            <li>User can use physical keyboard as well as virtual keyboard.</li>
            <li>
              User can mute the music, start a new round, and exit the game.
            </li>
            <li>Keys of the letters not in the answer are disabled.</li>
            <li>
              Hints are provided through the color of the grid. (Green is a
              letter that exists in the correct position. Yellow is a letter
              that exists in the answer but is not in the correct position. Red
              is a letter that doesn't exist in the answer.)
            </li>
          </ul>
        </>
      ),
    },
    {
      date: new Date(2022, 0, 30),
      id: 220407,
      github: "https://github.com/hi-hemini/mohoho",
      url: "https://mohoho-info.web.app/",
      name: "mohoho",
      img: mohoho,
      title: "Mohoho website",
      content: (
        <>
          <h3>Description</h3>
          <p>
            This Wordle Game project was created using Java GUI. Basically, the
            wordle game is a word guessing game with a simple grid interface
            where users guess a word. I worked on this project with a group of 4
            during Software Design and Development course in Spring 2022. Our
            project's theme is fruit, so each guess must be a valid five-letter
            word related to fruit. I was in charge of constructing backend
            logic, especially checking the length of the input, comparing user
            input with the answer, displaying color on the grid depending on the
            user input, accumulating scores, and changing levels.
          </p>
          <br />
          <h3>Features</h3>
          <ul>
            <li>
              User can change the difficulty level. (7 attempts for easy, 6 for
              medium, 5 for hard)
            </li>
            <li>User can use physical keyboard as well as virtual keyboard.</li>
            <li>
              User can mute the music, start a new round, and exit the game.
            </li>
            <li>Keys of the letters not in the answer are disabled.</li>
            <li>
              Hints are provided through the color of the grid. (Green is a
              letter that exists in the correct position. Yellow is a letter
              that exists in the answer but is not in the correct position. Red
              is a letter that doesn't exist in the answer.)
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="padding-top-70px project-page">
      <div className="home-experience">
        <h2 className="home-experience-title">Projects</h2>
        <div className="project-card-view">
          {ProjectPageCardContents.sort((a, b) => b.date - a.date).map(
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
