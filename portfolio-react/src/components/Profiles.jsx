import React from "react";
import styles from "../blocks/Profiles.module.css";
import planetPic from "../assets/planet.jpg";

export const Profiles = ({ onPlanetClick, isTransitioning = false }) => {
  return (
    <section className={styles.profiles_section}>
      <h2 className={styles.profiles_title}>Open Projects</h2>
      <button
        type="button"
        className={`${styles.profiles_planet_frame} ${isTransitioning ? styles.profiles_planet_entering : ""}`}
        onClick={onPlanetClick}
        aria-label="Open all projects page"
        disabled={isTransitioning}
      >
        <img
          src={planetPic}
          alt="Planet"
          className={styles.profiles_planet_image}
        />
      </button>
    </section>
  );
};
