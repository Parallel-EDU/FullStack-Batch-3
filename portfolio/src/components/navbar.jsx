import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import ThemeContext from "../context/themeContext";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <header className="flex z-[999] relative justify-center">
      <div
        className={`flex  bg-[#ffffffBF] w-[1024px] rounded-[50px] shadow-[0px_0px_20px_#00000033] backdrop-blur fixed top-[20px] justify-between items-center px-[40px] pt-[10px] pb-[10px]`}
      >
        <Link onClick={handleClick} to={"/"}>
          <img src={Logo} alt="" />
        </Link>
        <nav className="flex items-center gap-[52px]">
          <ul className="flex gap-[24px]">
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
          <div
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`w-[60px] cursor-pointer p-[4px] ${
              theme === "light" ? " border-[whitesmoke] bg-[#00000033]" : " border-[black]"
            } border-[1px] rounded-[35px]`}
          >
            <div
              className={`w-[20px] ${
                theme === "light"
                  ? "translate-0 bg-[whitesmoke]"
                  : "translate-x-[30px] bg-black"
              } h-[20px] transition-all duration-300 rounded-[50%]`}
            ></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
