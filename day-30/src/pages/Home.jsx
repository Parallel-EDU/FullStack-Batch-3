import React from "react";
import Navbar from "../components/homePage/navBar";
import Hero from "../components/homePage/hero";
import Alert from "../components/homePage/alert";
import Count from "../components/homePage/class";
import Effect from "../components/homePage/effect";
function Home() {
  return (
    <>
      <Navbar />
      <Hero value="Welcome to my website" />
      <Alert message="Hi, Ahmed" />
      <Count />
      <Effect />
    </>
  );
}

export default Home;
