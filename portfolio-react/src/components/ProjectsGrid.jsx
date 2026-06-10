import React from "react";
import "../blocks/project.css";
import { projects } from "../data/projects";

const ProjectsGrid = ({ showStatus = true }) => {
  return (
    <div className="projects_grid">
      {projects.map((project) => (
        <article
          key={project.id}
          className="projects_card"
          onClick={() =>
            window.open(project.link, "_blank", "noopener,noreferrer")
          }
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
            className="projects_image"
          />
          <h3 className="projects_card_title">{project.title}</h3>
          <div className="projects_tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="projects_tag">
                {tag}
              </span>
            ))}
          </div>
          <p className="projects_card_description">{project.description}</p>
          <div className="projects_links">
            <a
              href={project.link}
              className="projects_card_link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              View Project
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                className="projects_github_link"
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
              className={`projects_status projects_${project.status.replace("-", "_")}`}
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
