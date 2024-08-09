import React from "react";
import Project1 from "../../assets/Screenshot 2024-08-06 100912.png";
import Project2 from "../../assets/Screenshot 2024-08-06 100936.png";
import Project3 from "../../assets/Screenshot 2024-08-06 101032.png";
import Arrow from "../../assets/arrow-1.svg";
import { Link } from "react-router-dom";

function Project() {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <section className="bg-[#000000] px-[80px] max-md:px-[40px] max-sm:px-[20px] py-[101px] max-md:py-[51px]">
      <h1 className="text-[64px] max-md:text-[56px] max-sm:text-[44px] max-[500px]:text-[36px] text-white capitalize leading-[120%] font-semibold">
        My Projects
      </h1>
      <div className="flex mt-[52px] max-lg:flex-wrap gap-[32px]">
        <div className="w-[400px] max-lg:pb-[50px] max-[670px]:w-full max-lg:w-[45%] max-lg:h-auto hover:scale-105 transition-all duration-300 relative h-[350px] bg-white rounded-[7px] px-[12px] py-[20px]">
          <img src={Project2} className="border-[1px]" alt="" />
          <h1 className="text-[20px] leading-[120%] font-semibold mt-[12px]">
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
            onClick={handleClick}
            to={"/projects/knest-project"}
            className="absolute flex max-[670px]:left-[calc(100%-110px)] cursor-pointer max-xl:left-[65%] left-[72%] bottom-[5px]"
          >
            <p className="text-[14px] italic hover:mr-[8px] transition-all duration-300">
              Read More
            </p>
            <img src={Arrow} className="w-[24px]" alt="" />
          </Link>
        </div>
        <div className="w-[400px] max-lg:pb-[50px] max-[670px]:w-full max-lg:w-[45%] max-lg:h-auto hover:scale-105 transition-all duration-300 relative h-[350px] bg-white rounded-[7px] px-[12px] py-[20px]">
          <img src={Project3} className="border-[1px]" alt="" />
          <h1 className="text-[20px] font-semibold mt-[12px]">
            Portfolio Website
          </h1>
          <p className="text-base mt-[12px] mb-[8px]">Skills Used:</p>
          <div className="flex gap-[12px]">
            <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white">
              Reactjs
            </p>
            <p className="px-[8px] py-[4] text-[14px] bg-[black] rounded-[35px] text-white">
              TailwindCSS
            </p>
          </div>
          <Link
            onClick={handleClick}
            to={"/projects/portfolio-project"}
            className="absolute flex cursor-pointer max-xl:left-[65%] max-[670px]:left-[calc(100%-110px)] left-[72%] bottom-[5px]"
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
