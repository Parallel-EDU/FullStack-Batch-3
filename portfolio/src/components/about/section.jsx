import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`${
        theme === "light" ? "text-black bg-white" : "text-white bg-black"
      } px-[80px] pt-[51px] pb-[121px]`}
    >
      <div className="flex gap-[52px] justify- items-center">
        <img
          src="https://as1.ftcdn.net/v2/jpg/06/32/91/32/1000_F_632913287_pyej35IPG2tnAcqVxlD5QGlsJKUAYMhP.jpg"
          alt=""
          width={500}
          className="rounded-[13px]"
        />
        <div className="flex flex-col gap-[12px]">
          <div className="flex items-end gap-[12px]">
            <h1 className="text-[30px] leading-[120%] font-bold">Name:</h1>
            <p className="text-[24px] leading-[120%] italic">Ahmed</p>
          </div>
          <div className="flex items-end gap-[12px]">
            <h1 className="text-[30px] leading-[120%] font-bold">DOB:</h1>
            <p className="text-[24px] leading-[120%] italic">DD/MM/YYYY</p>
          </div>
          <div className="flex items-end gap-[12px]">
            <h1 className="text-[30px] leading-[120%] font-bold">
              Highest Qualification:
            </h1>
            <p className="text-[24px] leading-[120%] italic">B.E(CSE)</p>
          </div>
          <div className="flex items-end gap-[12px]">
            <h1 className="text-[30px] leading-[120%] font-bold">
              Passed out Year:
            </h1>
            <p className="text-[24px] leading-[120%] italic">YYYY</p>
          </div>
          <div className="flex items-end gap-[12px]">
            <h1 className="text-[30px] leading-[120%] font-bold">
              Experience:
            </h1>
            <p className="text-[24px] leading-[120%] italic">8+ Years</p>
          </div>
          <div className="flex items-end gap-[12px]">
            <h1 className="text-[30px] leading-[120%] font-bold">
              Tech Stack:
            </h1>
            <p className="text-[24px] leading-[120%] italic">MERN Stack</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <p className="mt-[52px] w-[1024px]">
          Present: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quam amet quo molestias odio magni voluptatum velit? Mollitia, aliquid
          blanditiis rerum quos recusandae molestias sequi fugiat aliquam
          officia inventore animi. Commodi, alias dolorum? Quibusdam tempore vel
          vero optio hic quae numquam ex dolore, quo, consectetur illum quod,
          sit atque? Nesciunt, repellendus? Possimus alias aut vel error dolore.
          Voluptatibus facere beatae, quidem corrupti quae exercitationem nihil
          voluptas,
          <strong> skills/experience</strong> nam reprehenderit debitis, labore
          repellendus aut at odit. Quia, rem, nobis cupiditate nulla officiis
          ipsam accusamus molestias magnam eligendi reiciendis autem. Officia
          accusamus rerum, asperiores distinctio, vitae ut laborum ipsam dolore
          corporis <i>a possimus neque harum ass</i>umenda eos at maxime.
          Adipisci praesentium maxime suscipit distinctio voluptas in odit
          dolorem earum dolore reiciendis.
        </p>
      </div>

      <div className="flex justify-end">
        <p className="mt-[52px] w-[1024px]">
          {" "}
          Past: Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          dolor deleniti dignissimos? Architecto repellendus perferendis
          consequatur at neque explicabo tenetur, delectus ea saepe dolor beatae
          praesentium reiciendis distinctio quod! Quo omnis molestiae id
          deserunt cumque! Maiores vitae culpa architecto non iste quidem
          adipisci labore? Maxime in esse delectus consectetur nihil.
        </p>
      </div>
      <div className="flex justify-start">
        <p className="mt-[52px] w-[1024px]">
          Future: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          inventore ex distinctio ad dolore deserunt nulla! Aspernatur hic
          maiores iusto omnis deserunt modi earum ratione quam facere, culpa cum
          perspiciatis animi distinctio, voluptatum officia architecto. Minima
          cum reprehenderit, dolore quae, deleniti nihil ab quis incidunt,
          maiores doloribus ea officia expedita. Optio, esse amet. Praesentium
          id beatae recusandae. Omnis dicta vero harum itaque ullam corrupti.
        </p>
      </div>
    </section>
  );
}

export default About;
