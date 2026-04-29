import React from "react";
import navyPic from "../assets/navy-pic2.jpg";
import resumePic from "../assets/resume-pic.jpg";

const About = () => {
  return (
    <div className="content_about">
      <p className="content_about_intro">
        Hello my name is Deondre Butler. I am 25 years old and I am a navy
        veteran. This is where I started my electrical journey that lasted 7
        years. After that i started investing in the tech industry a year ago.
      </p>
      <img src={navyPic} alt="navy" className="content_about_image" />
      <p className="content_about_biography">
        I have been working and learning the tech indusrty for about 1 year now.
        I curently go to school at triple ten for sofware engineer. Front end
        development part of the tech industry is the part of tech that intersted
        me the most. I enjoy turning design ideas into responsive, interactive
        websites.
      </p>
      <img src={resumePic} alt="resume-pic" className="content_about_image" />
    </div>
  );
};

export default About;
