import React from "react";

export const ProjectItems = [
  {
    date: new Date(2022, 4, 3),
    id: 220403,
    github: "https://github.com/hejin-jeong/Java-Wordle-Game",
    img: "https://i.postimg.cc/gjnYpdbx/wordle.png",
    title: "Java/JavaFX Wordle Game",
    content: (
      <>
        <h3>Description</h3>
        <p>
          This Wordle Game project was created using Java and JavaFX. Basically,
          the wordle game is a word guessing game with a simple grid interface
          where users guess a word. I worked on this project with a group of 4
          during Software Design and Development course in Spring 2022. Our
          project's theme is fruit, so each guess must be a valid five-letter
          word related to fruit. I was in charge of constructing backend logic,
          especially checking the length of the input, comparing user input with
          the answer, displaying color on the grid depending on the user input,
          accumulating scores, and changing levels.
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
            Hints are provided through the color of the grid. (Green is a letter
            that exists in the correct position. Yellow is a letter that exists
            in the answer but is not in the correct position. Red is a letter
            that doesn't exist in the answer.)
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
    img: "https://i.postimg.cc/pr4PX7Pq/emoods.png",
    title: "eMoods iOS app",
    content: (
      <>
        <h3>Description</h3>
        <p>
          This iOS app project was created using Swift and back4app to deploy
          our Parse server. I worked on this project with a group of 3 during
          CodePath iOS development course in Spring 2022. We came up with this
          app because since the pandemic, people are rarely having in-person
          meetings, and being emotionally depressed without having somebody to
          talk with. We wanted to create a space where people can share their
          emotions and get comfort. My responsibilities were setting up
          meetings, organizing overall plans, creating a feed screen,
          implementing post, comment, and react functionalities, and handling
          merge conflicts.
        </p>
        <br />
        <h3>Features</h3>
        <ul>
          <li>
            User can log in (stay logged in), log out, and sign up with their
            email. (An error message will appear if username or password is
            wrong while logging in.)
          </li>
          <li>
            User can post their moods. (use of emoji is mandatory but comments
            are optional.)
          </li>
          <li>User can see, comment, and react to others' posts.</li>
          <li>
            User can change their username and password, and delete their
            account.
          </li>
          <li>
            User can see the name of the users they follow and those who follow
            the user.
          </li>
          <li>User can see their own past posts.</li>
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
    img: "https://i.postimg.cc/B6hqRbkW/mustseum.png",
    title: "Must-seum React Web app",
    content: (
      <>
        <h3>Description</h3>
        <p>
          This project was created using React.js, Figma, Firebase, and
          OpenStreetMap API. The purpose of this project is to introduce art to
          people in an efficient way by searching museums and sorting artworks
          in the most-liked order. This will not only save time for busy
          travelers but also help people to find their tastes who want to
          appreciate art with accessible information. I worked on this project
          with a team of 3 during a 24-hour hackathon{" "}
          <a
            className="hackathon"
            href="https://www.hackher413.com/"
            target="_blank"
            rel="noreferrer"
          >
            HACK(H)ER413
          </a>{" "}
          and awarded First Place in the Best Use of Open Source Data Hack and
          the Best Design Hack. I utilized OpenStreetMap API to embed a map on
          the website and open-source CSV data sets from Kaggle by converting
          them into JSON files, implemented a search engine, and displayed the
          location of each museum with a pin by comparing the user input with
          the data from the JSON file.
        </p>
        <br />
        <h3>Features</h3>
        <ul>
          <li>
            User can search museums by their names, cities, and zip codes.
          </li>
          <li>
            User can select a specific museum from the map which will lead to a
            new page with a list of its artworks in the most-liked order.
          </li>
          <li>User can like each artwork.</li>
          <li>
            User can access the detail page of the artwork on the museum
            website.
          </li>
          <li>
            User can check art museums they've been to and artworks they've
            liked, and follow friends on their profile page.
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
    memo: "(Recommend setting viewport to iPhone SE (375x667))",
    name: "quevec",
    img: "https://i.postimg.cc/gkLYBYK5/quevec.png",
    title: "Quevec React app",
    content: (
      <>
        <h3>Description</h3>
        <p>
          This project was created using React.js, Figma, Firebase, and Google
          Maps API. The purpose of this project is to provide users with an
          all-in-one app where they can find COVID-19 testing centers, use QR
          codes to verify their immunization records, and track their test
          results. I worked on this project with a team of 3 during a 24-hour
          hackathon{" "}
          <a
            className="hackathon"
            href="https://u-hack.devpost.com/"
            target="_blank"
            rel="noreferrer"
          >
            U HACK 2022
          </a>{" "}
          and achieved the Third Place Award. I built the main page and map page
          by utilizing Google Maps API with the location list.
        </p>
        <br />
        <h3>Features</h3>
        <ul>
          <li>User can check positive cases and changes in policies.</li>
          <li>
            User can find COVID-19 testing centers by tapping a map and view
            lists which are sorted by distance and waitlist, and make
            appointments.
          </li>
          <li>
            User can use their QR codes to verify their immunization records.
          </li>
          <li>User can file up their test results and track them.</li>
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
    img: "https://i.postimg.cc/kMpJcVWK/mohoho.png",
    title: "Mohoho Website",
    content: (
      <>
        <h3>Description</h3>
        <p>
          This website was created using HTML/CSS. The purpose of this project
          is to share useful information and resources that Mount Holyoke
          College provides to students in a more accessible manner. My friend
          and I thought that there are lots of school resources that we can
          utilize for our academics, residential life, and career but it's hard
          to find them since they are scattered across different websites and
          platforms. Therefore, we decided to build a simple website where those
          resources are listed with direct links and made them easier to access.
        </p>
        <br />
        <h3>Features</h3>
        <ul>
          <li>
            User can toggle opening/closing hours of the most-visited buildings
            and wifi information.
          </li>
          <li>User can click map image to access campus map.</li>
          <li>
            User can view the categorized list of school resources and access
            them with a single click.
          </li>
        </ul>
      </>
    ),
  },
  {
    date: new Date(2022, 8, 7),
    id: 220408,
    github: "https://github.com/HackHolyoke-Webmaster/react-website",
    url: "https://hackholyoke.com/",
    name: "hackholyoke",
    img: "https://i.postimg.cc/yNcxKC28/hackholyoke.png",
    title: "HackHolyoke React Website (Under Construction)",
    content: (
      <>
        <h3>Description</h3>
        <p>
          I am co-developing an official website for the school’s traditional
          24-hour hackathon <strong>HackHolyoke</strong> using React.js and
          Figma. This website provides information about HackHolyoke including
          date, organizing team, schedules, challenges, and
          sponsors. I'm working on the main page and adding mobile
          responsiveness to the whole website.
        </p>
        <br />
        <h3>Features</h3>
        <ul>
          <li>User can visit different pages of the website using the navbar on top.</li>
          <li>User can register to the event using 'Register' button on the navbar.</li>
          <li>
            User can check how many days are left until the event begins as well
            as the date of the event.
          </li>
          <li>
            User can get information about HackHolyoke and organizing team
            members.
          </li>
          <li>
            User can view sponsors, schedules, challenges, and prehack resources.
          </li>
        </ul>
      </>
    ),
  },
];
