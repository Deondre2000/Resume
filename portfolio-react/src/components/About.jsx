import React from "react";
import navyPic from "../assets/navy-pic2.jpg";
import resumePic from "../assets/resume-pic.jpg";
import "../blocks/content.css";

const About = () => {
  return (
    <div className="content_about">
      <p className="content_about_intro">
        I am a navy veteran. This is where I started my electrical journey that
        lasted 7 years. After that I started investing in the tech industry a
        year ago.
      </p>
      <img src={navyPic} alt="navy" className="content_about_image" />
      <p className="content_about_biography">
        I have been working and learning the tech industry for about 1 year now.
        I went to school at Triple Ten for software engineering and the part
        about tech that interested me the most is the Front end development part
        of the tech industry. me the most. I enjoy turning design ideas into
        responsive, interactive websites.
      </p>
      <img src={resumePic} alt="resume-pic" className="content_about_image" />
    </div>
  );
};

export default About;
