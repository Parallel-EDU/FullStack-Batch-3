import React from "react";
import Logo from "../../logo.svg";
function Navbar() {
  return (
    <header className="flex justify-between items-center py-[20px] px-[80px]">
      <img src={Logo} className="w-[80px] h-[80px]" alt="" />
      <nav>
        <ul>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
