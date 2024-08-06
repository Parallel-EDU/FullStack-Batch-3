import React, { useRef } from "react";
import Hero from "../components/servicePage/hero";
import Section from "../components/servicePage/section";
import Refexample from "../components/servicePage/refexample";
function Service() {
  const sectionRef = useRef(null);

  const handleClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Hero />
      <div className="absolute top-[150px] right-[100px]">
        <button onClick={handleClick} className="">
          Scroll to Service section
        </button>
      </div>
      <div ref={sectionRef}>
        <Section />
      </div>
      {/* <Refexample /> */}
    </>
  );
}

export default Service;
