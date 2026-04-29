import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import { Profiles } from "./components/Profiles";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Stars from "./components/Stars";
import "./App.css";
import "./blocks/style.css";
import "./blocks/background.css";
import "./blocks/content.css";
import "./blocks/heading.css";
import "./blocks/projects.css";

function App() {
  return (
    <div className="background_page">
      <Stars />
      <Nav />
      <Header />
      <Profiles />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
