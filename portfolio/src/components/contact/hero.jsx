import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`${
        theme === "light" ? "text-black bg-white" : "text-white bg-black"
      } px-[80px] h-[100vh] relative pt-[250px]`}
    >
      <h1 className="text-[92px] font-semibold w-[1050px] capitalize leading-[120%]">
        Fillout the Form below to get in touch with me
      </h1>
    </main>
  );
}

export default Hero;
