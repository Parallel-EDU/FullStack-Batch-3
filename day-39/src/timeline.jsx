import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Timeline() {
  const boxRef = useRef(null);
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .to(boxRef.current, { duration: 1, rotation: 360 })
      .to(boxRef.current, { duration: 1, x: 100 })
      .to(boxRef.current, { duration: 1, opacity: 0.5 });
  }, []);

  useEffect(() => {
    gsap
      .timeline()
      .to(boxRef1.current, { y: 20, duration: 0.1 })
      .to(boxRef2.current, { y: 20, duration: 0.1 })
      .to(boxRef3.current, { y: 20, duration: 0.1 })
      .to(boxRef1.current, { y: 0, duration: 0.1 })
      .to(boxRef2.current, { y: 0, duration: 0.1 })
      .to(boxRef3.current, { y: 0, duration: 0.1 });
  }, []);

  useEffect(() => {
    gsap.fromTo(boxRef4.current, { scale: 0.1 }, { scale: 1, duration: 0.5 });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(boxRef4.current, { scale: 1.2, duration: 0.5 });
  };
  const handleMouseLeave = () => {
    gsap.to(boxRef4.current, { scale: 1, duration: 0.5 });
  };

  return (
    <section>
      <div ref={boxRef} className="w-[100px] h-[100px] bg-black"></div>
      <div className="mt-[200px] h-[100px] flex justify-center gap-[12px]">
        <div
          ref={boxRef1}
          className="w-[20px] rounded-[50%] h-[20px] bg-[lightblue]"
        ></div>
        <div
          ref={boxRef2}
          className="w-[20px] rounded-[50%] h-[20px] bg-[lightblue]"
        ></div>
        <div
          ref={boxRef3}
          className="w-[20px] rounded-[50%] h-[20px] bg-[lightblue]"
        ></div>
      </div>
      <div
        ref={boxRef4}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-[100px] h-[100px] bg-[coral] flex items-center justify-center cursor-pointer m-[10px]"
      >
        Hover Me!
      </div>
    </section>
  );
}

export default Timeline;
