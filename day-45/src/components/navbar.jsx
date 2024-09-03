import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <ul className="flex gap-[52px]">
          <Link to={'/'}>Home</Link>
          <Link to={'/about-us'}>About</Link>
          <Link>Services</Link>
          <Link>Contact</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
