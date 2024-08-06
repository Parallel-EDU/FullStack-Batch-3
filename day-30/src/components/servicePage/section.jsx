import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function Section() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      style={{
        background: theme === "light" ? "white" : "#333",
        color: theme === "light" ? "black" : "white",
      }}
      className="py-[52px] px-[80px]"
    >
      <h1 className="text-[56px] max-md:text-[42px] max-sm:text-[36px] mb-[42px]">
        Our Services
      </h1>
      <div className="flex gap-[20px] max-md:gap-[30px] max-xl:flex-wrap">
        <div className="w-[25%] max-xl:w-[45%] max-md:w-full p-[20px] shadow-md rounded-[13px] hover:shadow-2xl max-md:shadow-2xl transition-all">
          <h1 className="text-[24px] mb-[12px]">Full Stack Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet
            ipsam deserunt ex? Quos minima dolore mollitia repellendus
            molestiae! Iste ratione delectus itaque, magni officia, rem sint
            eligendi vero sapiente repudiandae placeat, beatae dolore sit.
          </p>
        </div>
        <div className="w-[25%] max-xl:w-[45%] max-md:w-full p-[20px] shadow-md rounded-[13px] hover:shadow-2xl max-md:shadow-2xl transition-all">
          <h1 className="text-[24px] mb-[12px]">Full Stack Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet
            ipsam deserunt ex? Quos minima dolore mollitia repellendus
            molestiae! Iste ratione delectus itaque, magni officia, rem sint
            eligendi vero sapiente repudiandae placeat, beatae dolore sit.
          </p>
        </div>
        <div className="w-[25%] max-xl:w-[45%] max-md:w-full p-[20px] shadow-md rounded-[13px] hover:shadow-2xl max-md:shadow-2xl transition-all">
          <h1 className="text-[24px] mb-[12px]">Full Stack Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet
            ipsam deserunt ex? Quos minima dolore mollitia repellendus
            molestiae! Iste ratione delectus itaque, magni officia, rem sint
            eligendi vero sapiente repudiandae placeat, beatae dolore sit.
          </p>
        </div>
        <div className="w-[25%] max-xl:w-[45%] max-md:w-full p-[20px] shadow-md rounded-[13px] hover:shadow-2xl max-md:shadow-2xl transition-all">
          <h1 className="text-[24px] mb-[12px]">Full Stack Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet
            ipsam deserunt ex? Quos minima dolore mollitia repellendus
            molestiae! Iste ratione delectus itaque, magni officia, rem sint
            eligendi vero sapiente repudiandae placeat, beatae dolore sit.
          </p>
        </div>
      </div>
      {/* <label htmlFor="">
          Name:
          <input
            type="text"
            name=""
            id=""
            ref={inputRef}
            className="border-[1px] block mt-[10px] rounded-[7px] h-[32px] pl-[16.51px] border-black w-[300px]"
          />
        </label> */}
    </section>
  );
}

export default Section;
