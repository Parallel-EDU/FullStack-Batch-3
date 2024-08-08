import React from "react";
import Project1 from "../../assets/Screenshot 2024-08-06 100912.png";
import Project2 from "../../assets/Screenshot 2024-08-06 100936.png";
import Project3 from "../../assets/Screenshot 2024-08-06 101032.png";
import Arrow from "../../assets/arrow-1.svg";
import { Link } from "react-router-dom";

function Project() {
  return (
    <section className="bg-[#000000] px-[80px] py-[101px]">
      <h1 className="text-[64px] text-white capitalize leading-[120%] font-semibold">
        My Projects
      </h1>
      <div className="flex mt-[52px] gap-[32px]">
        <div className="w-[400px] hover:scale-105 transition-all duration-300 relative h-[350px] bg-white rounded-[7px] px-[12px] py-[20px]">
          <img src={Project1} className="border-[1px]" alt="" />
          <h1 className="text-[20px] font-semibold mt-[12px]">
            Basic Tailwind Website
          </h1>
          <p className="text-base mt-[12px] mb-[8px]">Skills Used:</p>
          <div className="flex gap-[12px]">
            <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white">
              HTML
            </p>
            <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white">
              TailwindCSS
            </p>
          </div>
          <Link
            to={"/projects/tailwind-project"}
            className="absolute flex left-[72%] cursor-pointer bottom-[5px]"
          >
            <p className="text-[14px] italic hover:mr-[8px] transition-all duration-300">
              Read More
            </p>
            <img src={Arrow} className="w-[24px]" alt="" />
          </Link>
        </div>
        <div className="w-[400px] hover:scale-105 transition-all duration-300 relative h-[350px] bg-white rounded-[7px] px-[12px] py-[20px]">
          <img src={Project2} className="border-[1px]" alt="" />
          <h1 className="text-[20px] font-semibold mt-[12px]">
            Knest Aluminium FormWork
          </h1>
          <p className="text-base mt-[12px] mb-[8px]">Skills Used:</p>
          <div className="flex gap-[12px]">
            <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white">
              HTML
            </p>
            <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white">
              TailwindCSS
            </p>
            <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white">
              JavaScript
            </p>
          </div>
          <Link
            to={"/projects/knest-project"}
            className="absolute flex cursor-pointer left-[72%] bottom-[5px]"
          >
            <p className="text-[14px] italic hover:mr-[8px] transition-all duration-300">
              Read More
            </p>
            <img src={Arrow} className="w-[24px]" alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Project;
