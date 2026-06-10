import React from "react";
import "../blocks/project.css";
import ProjectsGrid from "./ProjectsGrid";

const ProjectsPage = ({ onBack, isTransitioningBack = false }) => {
  return (
    <section
      className={`projects_section projects_page_section ${isTransitioningBack ? "projects_page_exiting" : ""}`}
    >
      <h2 className="projects_title">All Projects</h2>
      <ProjectsGrid showStatus={true} />

      <div className="projects_page_footer">
        <button
          type="button"
          onClick={onBack}
          className="projects_back_button"
          disabled={isTransitioningBack}
        >
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default ProjectsPage;
