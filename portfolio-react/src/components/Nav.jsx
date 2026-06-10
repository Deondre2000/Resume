import React from "react";
import "../blocks/Nav.css";
import linked from "../assets/linked-in.webp";
import gmail from "../assets/gmail.webp";
import github from "../assets/github.png";

const Nav = () => {
  return (
    <nav className="Nav_container">
      <li className="Nav_item">
        <div className="Nav_label">Contact</div>
        <a
          className="Nav_LinkedIn"
          href="https://www.linkedin.com/in/deondre-butler-7b88b6214/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="Nav_contact" src={linked} alt="linkedin" />
        </a>
        <a
          className="Nav_github"
          href="https://github.com/Deondre2000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="Nav_contact" src={github} alt="github" />
        </a>
      </li>
    </nav>
  );
};

export default Nav;
