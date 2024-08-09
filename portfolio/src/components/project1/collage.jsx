import Project1 from "../../assets/Screenshot 2024-08-06 100912.png";
import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Collage() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`${
        theme === "light" ? "text-black bg-[smokewhite]" : "text-white bg-[#000000BF]"
      } px-[80px] max-sm:px-[20px] max-md:px-[40px] max-sm:py-[30px] bg-[whitesmoke] py-[81px]`}
    >
      <div className="flex max-sm:flex-col gap-[20px]">
        <img src={Project1} className="w-[49%] max-sm:w-full" alt="" />
        <img src={Project1} className="w-[49%] max-sm:w-full" alt="" />
      </div>
      <img src={Project1} className="mt-[20px]" alt="" />
    </section>
  );
}

export default Collage;
