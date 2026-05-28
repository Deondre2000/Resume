import React from "react";
import "../blocks/heading.css";

const Nav = () => {
  return (
    <nav className="heading_nav_container">
      <ul className="heading_nav_list">
        <li>
          <div className="heading_nav_label">Contact</div>
          <a
            className="heading_nav_contact"
            href="mailto:deondrebutler20@gmail.com"
          >
            deondrebutler20@gmail.com
          </a>
          <a
            className="heading_nav_contact"
            href="https://www.linkedin.com/in/deondre-butler-7b88b6214/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin@ Deondre-Butler
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
