import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
function Navbar() {
  return (
    <header className="flex z-[999] relative justify-center">
      <div className="flex w-[1024px] rounded-[50px] bg-[#ffffffBF] shadow backdrop-blur fixed top-[20px] justify-between items-center px-[40px] pt-[10px] pb-[10px]">
        <Link
          to={"/"}
        >
          <img src={Logo} alt="" />
        </Link>
        <nav>
          <ul className="flex gap-[24px]">
            <li>
            <Link
          to={"/about"}
        >
                About
              </Link>
            </li>
            <li>
              <div
              // to={"/projects"}
              >
                Projects
              </div>
            </li>
            <li>
              <div
              // to={"/contact"}
              >
                Contact
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
