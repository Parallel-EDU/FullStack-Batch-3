import React, { useContext, useState } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      style={{
        background: theme === "light" ? "white" : "#333",
        color: theme === "light" ? "black" : "white",
      }}
      className="py-[52px] flex bg-gray-500  max-[550px]:justify-start max-[330px]:gap-[50px] max-[550px]:gap-[80px] justify-between px-[80px] max-lg:px-[40px] max-md:px-[20px]"
    >
      <div className="flex gap-[32px] max-[550px]:flex-col">
        <p className="w-[100px] text-white">xyz, District, State, country</p>
        <div>
          <ul>
            <li className="text-white hover:underline cursor-pointer">
              Instagram
            </li>
            <li className="text-white hover:underline cursor-pointer">
              Github
            </li>
            <li className="text-white hover:underline cursor-pointer">
              Linkedin
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-[32px] max-[550px]:flex-col">
        <div>
          <ul>
            <li className="text-white hover:underline cursor-pointer">
              Phonenumber
            </li>
            <li className="text-white hover:underline cursor-pointer">Email</li>
          </ul>
        </div>
        <ul>
          <li>
            <a
              href="#about"
              className="text-white hover:underline cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-white hover:underline cursor-pointer"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-white hover:underline cursor-pointer"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:underline cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
