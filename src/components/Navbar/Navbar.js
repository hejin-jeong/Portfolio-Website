import React from "react";
import { NavbarItems } from "./NavbarItems";
import "./Navbar.css";

export default function Navbar() {
  const [isClicked, setIsClicked] = React.useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  // Stay underlined
  return (
    <nav className="NavbarItems">
      <div className="menu-icon" onClick={handleClick}>
        <i className="fa fa-bars"></i>
      </div>
      <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
        {NavbarItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
