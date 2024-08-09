import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/themeContext";
function Footer() {
  const { theme } = useContext(ThemeContext);
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <footer
      className={`  ${
        theme === "light" ? "bg-white" : "text-white bg-black"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] max-[500px]:flex-col max-[500px]:gap-[40px] flex justify-between pt-[50px] pb-[80px]`}
    >
      <div className="flex max-sm:gap-[32px] max-[500px]:justify-between gap-[52px]">
        <ul className="flex flex-col gap-[4px]">
          <li>
            <div
            // to={"/about"}
            >
              Linkedin
            </div>
          </li>
          <li>
            <div
            // to={"/projects"}
            >
              Github
            </div>
          </li>
          <li>
            <div
            // to={"/contact"}
            >
              Instagram
            </div>
          </li>
        </ul>
        <ul className="flex flex-col max-[500px]:w-[120px] gap-[4px]">
          <li>
            <a href="mailto:hello@paralleledu.com">Mail</a>
          </li>
          <li>
            <a href="tel: +91 9876543210">Phone Number</a>
          </li>
        </ul>
      </div>
      <div className="flex max-sm:gap-[32px] max-[500px]:justify-between gap-[52px]">
        <ul className="flex flex-col gap-[4px]">
          <li>
            <Link onClick={handleClick} to={"/projects/tailwind-project"}>
              Tailwind Project
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to={"/projects/knest-project"}>
              Knest Project
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to={"/projects/portfolio-project"}>
              Portfolio Project
            </Link>
          </li>
        </ul>
        <ul className="flex max-[500px]:w-[120px] flex-col gap-[4px]">
          <li>
            <Link onClick={handleClick} to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to={"/projects"}>
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
