import React, { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import { Profiles } from "./Profiles";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";
import Stars from "./Stars";
import ProjectsPage from "./ProjectsPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [transitionPhase, setTransitionPhase] = useState("idle");

  const pageClassName = [
    "background_page",
    transitionPhase === "zooming" ? "background_page_zooming" : "",
    transitionPhase === "zooming_out" ? "background_page_zooming_out" : "",
    transitionPhase === "arriving" ? "background_page_arriving" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const handlePlanetClick = () => {
    if (transitionPhase !== "idle") return;
    setTransitionPhase("zooming");
    setTimeout(() => {
      setCurrentPage("projects");
      setTransitionPhase("arriving");
    }, 750);
    setTimeout(() => {
      setTransitionPhase("idle");
    }, 1200);
  };

  const handleBackHome = () => {
    if (transitionPhase !== "idle") return;
    setTransitionPhase("zooming_out");
    setTimeout(() => {
      setCurrentPage("home");
      setTransitionPhase("arriving");
    }, 750);
    setTimeout(() => {
      setTransitionPhase("idle");
    }, 1200);
  };

  if (currentPage === "projects") {
    return (
      <div className={pageClassName}>
        <Stars />
        <ProjectsPage
          onBack={handleBackHome}
          isTransitioningBack={transitionPhase === "zooming_out"}
        />
      </div>
    );
  }

  return (
    <div className={pageClassName}>
      <Stars />
      <Nav />
      <Header />
      <Profiles
        onPlanetClick={handlePlanetClick}
        isTransitioning={transitionPhase === "zooming"}
      />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
