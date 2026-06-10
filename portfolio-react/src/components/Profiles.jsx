import React from "react";
import "../blocks/profile.css";
import planetPic from "../assets/planet.jpg";

export const Profiles = ({ onPlanetClick, isTransitioning = false }) => {
  return (
    <section className="profiles_section">
      <h2 className="profiles_title">Click Planet To Open Projects</h2>
      <button
        type="button"
        className={`profiles_planet_frame ${isTransitioning ? "profiles_planet_entering" : ""}`}
        onClick={onPlanetClick}
        aria-label="Open all projects page"
        disabled={isTransitioning}
      >
        <img src={planetPic} alt="Planet" className="profiles_planet_image" />
      </button>
    </section>
  );
};
