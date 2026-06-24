import React from "react";
import "../blocks/content.css";
import java from "../assets/java.webp";
import html from "../assets/html.webp";
import css from "../assets/CSS.webp";
import react from "../assets/react.webp";
import api from "../assets/API.png";
import RESTfulAPI from "../assets/RESTfulAPI.png";
import GITversion from "../assets/GITversion.png";

const Skills = () => {
  return (
    <div className="content_skills_section">
      <p className="content_skills_title">Technical Skills:</p>
      <ul className="content_skills_list">
        <li className="content_skills_list_item">
          <img src={java} alt="Java" />
        </li>
        <li className="content_skills_list_item">
          <img src={html} alt="HTML" />
        </li>
        <li className="content_skills_list_item">
          <img src={css} alt="CSS" />
        </li>
        <li className="content_skills_list_item">
          <img src={react} alt="React" />
        </li>
        <li className="content_skills_list_item">
          <img src={api} alt="API Integration" />
        </li>
        <li className="content_skills_list_item">
          <img src={GITversion} alt="Git Version Control" />
        </li>
        <li className="content_skills_list_item">
          <img src={RESTfulAPI} alt="RESTful APIs" />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
