import React, { useContext, useState } from "react";
import Cat from "../../assets/cat.jpeg";
import ThemeContext from "../../contexts/ThemeContext";

function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="about"
      style={{
        background: theme === "light" ? "white" : "#333",
        color: theme === "light" ? "black" : "white",
      }}
      className="py-[121px] flex gap-[65px] max-[1370px]:gap-[32px] max-[885px]:flex-col items-center px-[80px] max-lg:px-[40px] max-md:px-[20px]"
    >
      <img src={Cat} className="rounded-[50%] max-[1130px]:w-[300px]" alt="" />
      <div>
        <h1 className="text-[34px] mb-[24px] max-[885px]:text-center">
          About Us
        </h1>
        <p className="w-[700px] max-[1370px]:w-[500px] max-[885px]:text-center max-[885px]:w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi porro
          vitae, corrupti, aperiam dolorum dolores eaque repellat beatae
          assumenda, sapiente voluptas libero. Commodi, cumque quia, amet
          possimus voluptates totam doloribus aspernatur a saepe, alias natus
          accusantium dolor? Eos voluptatibus nostrum vel explicabo nulla earum
          fugit in voluptas nihil non ad porro dignissimos, eius totam facilis
          dicta animi temporibus minima, quidem doloribus quod fuga enim.
          Facilis, accusantium distinctio id adipisci magnam blanditiis est
          consectetur inventore deserunt quasi eveniet natus animi repellendus
          mollitia tempora, amet debitis. Perspiciatis laudantium quae possimus,
          dolorum recusandae numquam velit? Modi doloribus alias dolorem
          architecto nobis quidem iste doloremque veniam molestiae dolore fugiat
          ipsum sunt, ab, enim consequatur vero repudiandae eum, delectus
          corrupti nihil ad repellendus non iusto.
        </p>
      </div>
    </section>
  );
}

export default Hero;
