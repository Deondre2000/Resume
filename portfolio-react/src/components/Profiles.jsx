import React from "react";
import styles from "../blocks/Profiles.module.css";
import coffeePic from "../assets/coffee-pic.png";
import spotsPic from "../assets/spots-pic.png";
import planetPic from "../assets/planet.jpg";

export const Profiles = () => {
  const projects = [
    {
      id: 1,
      title: "Coffee Shop Project",
      description:
        "A responsive website for a local coffee shop featuring a menu, about section, and online ordering capabilities.",
      imageUrl: coffeePic,
      link: "https://deondre2000.github.io/se_project_coffeeshop/",
      tags: ["React", "CSS3", "Responsive Design"],
      status: "completed",
      githubLink: "https://github.com/Deondre2000/se_project_coffeeshop",
    },
    {
      id: 2,
      title: "Spots Project",
      description:
        "An interactive web application for discovering and sharing interesting locations and spots in your area.",
      imageUrl: spotsPic,
      link: "https://deondre2000.github.io/se_project_spots/",
      tags: ["JavaScript", "API Integration", "Maps"],
      status: "completed",
      githubLink: "https://github.com/Deondre2000/se_project_spots",
    },
  ];

  return (
    <section className={styles.profiles_section}>
      <div className={styles.profiles_planet_frame} aria-hidden="true">
        <img
          src={planetPic}
          alt="Planet"
          className={styles.profiles_planet_image}
        />
      </div>
      <h2 className={styles.profiles_title}>My Projects</h2>
      <div className={styles.profiles_grid}>
        {projects.map((project) => (
          <article key={project.id} className={styles.profiles_card}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className={styles.profiles_image}
            />
            <h3 className={styles.profiles_card_title}>{project.title}</h3>
            <div className={styles.profiles_tags}>
              {project.tags.map((tag, index) => (
                <span key={index} className={styles.profiles_tag}>
                  {tag}
                </span>
              ))}
            </div>
            <p className={styles.profiles_card_description}>
              {project.description}
            </p>
            <div className={styles.profiles_links}>
              <a
                href={project.link}
                className={styles.profiles_card_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  className={styles.profiles_github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
            <div
              className={`${styles.profiles_status} ${styles[`profiles_${project.status.replace("-", "_")}`]}`}
            >
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
