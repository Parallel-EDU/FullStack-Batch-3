import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="px-[80px] bg-white flex justify-between pt-[50px] pb-[80px]">
      <div className="flex gap-[52px]">
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
        <ul className="flex flex-col gap-[4px]">
          <li>
            <a href="mailto:hello@paralleledu.com">Mail</a>
          </li>
          <li>
            <a href="tel: +91 9876543210">Phone Number</a>
          </li>
        </ul>
      </div>

      <ul className="flex flex-col gap-[4px]">
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link
          to={"/projects"}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
