import { Link } from "react-router-dom";
import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function Section() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`${
        theme === "light" ? "text-black bg-white" : "text-white bg-black"
      } px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:py-[51px] py-[101px]`}
    >
      <h1 className="text-[64px] max-md:text-[56px] max-sm:text-[44px] max-[500px]:text-[36px] capitalize leading-[120%] font-semibold">
        Description and Skills:
      </h1>
      <p className="mt-[30px] w-[1024px] max-xl:w-full">
        Inspired: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Impedit ducimus inventore nesciunt recusandae numquam animi nostrum
        laudantium voluptas sapiente! Excepturi ut molestiae suscipit voluptate
        cupiditate quam debitis soluta voluptatum autem.
      </p>

      <p className="mt-[20px] w-[1024px] max-xl:w-full">
        Skills: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Impedit ducimus inventore nesciunt recusandae numquam animi nostrum
        laudantium voluptas sapiente! Excepturi ut molestiae suscipit voluptate
        cupiditate quam debitis soluta voluptatum autem.
      </p>
      <h1 className="mt-[30px] text-[20px]">HTML:</h1>
      <p className="mt-[10px] w-[1024px] max-xl:w-full">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        ducimus inventore nesciunt recusandae numquam animi nostrum laudantium
        voluptas sapiente! Excepturi ut molestiae suscipit voluptate cupiditate
        quam debitis soluta voluptatum autem.
      </p>
      <h1 className="mt-[30px] text-[20px]">TailwindCSS:</h1>
      <p className="mt-[10px] w-[1024px] max-xl:w-full">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        ducimus inventore nesciunt recusandae numquam animi nostrum laudantium
        voluptas sapiente! Excepturi ut molestiae suscipit voluptate cupiditate
        quam debitis soluta voluptatum autem.
      </p>
      <h1 className="mt-[30px] text-[20px]">Responsiveness:</h1>
      <p className="mt-[10px] w-[1024px] max-xl:w-full">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        ducimus inventore nesciunt recusandae numquam animi nostrum laudantium
        voluptas sapiente! Excepturi ut molestiae suscipit voluptate cupiditate
        quam debitis soluta voluptatum autem.
      </p>
      <h1 className="mt-[30px] text-[20px]">Reactjs:</h1>
      <p className="mt-[10px] w-[1024px] max-xl:w-full">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
        ducimus inventore nesciunt recusandae numquam animi nostrum laudantium
        voluptas sapiente! Excepturi ut molestiae suscipit voluptate cupiditate
        quam debitis soluta voluptatum autem.{" "}
        <Link to={"/"} target="_blank" className="underline">
          {" "}
          Click here
        </Link>{" "}
        to visit my project.
      </p>
    </section>
  );
}

export default Section;
