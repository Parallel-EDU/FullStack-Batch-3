import React from "react";
import { Link } from "react-router-dom";
function Section() {
  return (
    <section className="px-[80px] flex-col items-center gap-[24px] flex py-[101px] bg-white">
      <h1 className="text-[64px] capitalize text-center w-[700px] leading-[120%] font-semibold">
        Want to know more about me.
      </h1>
      <Link to={"/about"}>
        <button className="border-[1px] hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white border-black px-[35px] py-[12px] rounded-[35px]">
          About
        </button>
      </Link>
    </section>
  );
}

export default Section;
