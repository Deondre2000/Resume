import React from "react";
import styles from "../blocks/Profiles.module.css";
import ProjectsGrid from "./ProjectsGrid";

const ProjectsPage = ({ onBack, isTransitioningBack = false }) => {
  return (
    <section
      className={`${styles.profiles_section} ${styles.projects_page_section} ${isTransitioningBack ? styles.projects_page_exiting : ""}`}
    >
      <div className={styles.projects_page_header}>
        <button
          type="button"
          onClick={onBack}
          className={styles.projects_back_button}
          disabled={isTransitioningBack}
        >
          Back to Home
        </button>
      </div>

      <h2 className={styles.profiles_title}>All Projects</h2>
      <ProjectsGrid showStatus={false} />
    </section>
  );
};

export default ProjectsPage;
