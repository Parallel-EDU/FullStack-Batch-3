import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { Link } from "react-router-dom";

function Section() {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={`px-[80px] ${
        theme === "light" ? "bg-white" : "text-white bg-black"
      } flex-col items-center gap-[24px] flex py-[101px]`}
    >
      <h1 className="text-[64px] capitalize text-center w-[700px] leading-[120%] font-semibold">
        Want to know more about me.
      </h1>
      <Link to={"/about"}>
        <button
          className={`border-[1px] hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white ${
            theme === "light"
              ? " border-black"
              : " border-white"
          } px-[35px] py-[12px] rounded-[35px]`}
        >
          About
        </button>
      </Link>
    </section>
  );
}

export default Section;
