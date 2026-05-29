import React from "react";
import styles from "../blocks/Profiles.module.css";
import { projects } from "../data/projects";

const ProjectsGrid = ({ showStatus = true }) => {
  return (
    <div className={styles.profiles_grid}>
      {projects.map((project) => (
        <article
          key={project.id}
          className={styles.profiles_card}
          onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              window.open(project.link, "_blank", "noopener,noreferrer");
            }
          }}
          role="link"
          tabIndex={0}
        >
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
              onClick={(event) => event.stopPropagation()}
            >
              View Project
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                className={styles.profiles_github_link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                GitHub
              </a>
            )}
          </div>
          {showStatus && (
            <div
              className={`${styles.profiles_status} ${styles[`profiles_${project.status.replace("-", "_")}`]}`}
            >
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

export default ProjectsGrid;
