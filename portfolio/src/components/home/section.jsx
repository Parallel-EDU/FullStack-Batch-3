import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { Link } from "react-router-dom";

function Section() {
  const { theme } = useContext(ThemeContext);
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <section
      className={`px-[80px] max-md:px-[40px] max-sm:px-[20px] ${
        theme === "light" ? "bg-white" : "text-white bg-black"
      } flex-col items-center gap-[24px] flex py-[101px]`}
    >
      <h1 className="text-[64px] max-md:text-[56px] max-sm:text-[44px] max-[500px]:text-[36px] capitalize text-center w-[700px] max-md:w-full leading-[120%] font-semibold">
        Want to know more about me.
      </h1>
      <Link className="max-sm:w-full" to={"/about"}>
        <button
          onClick={handleClick}
          className={`border-[1px] max-sm:w-full hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white ${
            theme === "light" ? " border-black" : " border-white"
          } px-[35px] py-[12px] rounded-[35px]`}
        >
          About
        </button>
      </Link>
    </section>
  );
}

export default Section;
