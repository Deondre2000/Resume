import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import { Profiles } from "./Profiles";
import About from "./About";
import Skills from "./Skills";
import Footer from "./Footer";
import Stars from "./Stars";

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
