import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Hero() {
  const { theme } = useContext(ThemeContext);
  return (
    <main
      className={`${
        theme === "light" ? "text-black bg-white" : "text-white bg-black"
      } px-[80px] h-[700px] relative pt-[180px]`}
    >
      <h1 className="text-[92px] font-semibold w-[1000px] capitalize leading-[120%]">
        Learn More about my skills and experience through my projects
      </h1>
    </main>
  );
}

export default Hero;
