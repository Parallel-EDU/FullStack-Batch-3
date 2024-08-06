import React from "react";
import Hero from "../components/homePage/hero";
import About from "../components/aboutPage/hero";
import Contact from "../components/homePage/contact";
import Section from "../components/servicePage/section";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Section />
      <Contact />
    </>
  );
}

export default Home;
