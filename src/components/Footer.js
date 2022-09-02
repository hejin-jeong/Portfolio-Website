import React from "react";
import "./Footer.css";

function Footer() {
  const currDate = new Date();
  const currYear = currDate.getFullYear();

  return (
    <footer className="footer">
      <div>
        <a href="https://github.com/hejin-jeong" target="_blank" rel="noreferrer" title="GitHub">
          <i class="fa fa-github footer-logos" aria-hidden="true"></i>
        </a>
        <a href="mailto:pearlofthesea25@gmail.com" title="Gmail">
        <i class="fa fa-envelope footer-logos"></i>
        </a>
        <a href="https://www.linkedin.com/in/hejin-jeong/" target="_blank" rel="noreferrer" title="LinkedIn">
        <i class="fa fa-linkedin footer-logos"></i>
        </a>
      </div>
      <p>© {currYear} Hejin Jeong</p>
    </footer>
  );
}

export default Footer;
