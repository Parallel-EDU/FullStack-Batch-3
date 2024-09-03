import { useEffect, useRef } from "react";
import "./App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heading1 = useRef(null);
  const heading2 = useRef(null);
  const name = useRef(null);
  const position = useRef(null);
  const border = useRef(null);
  const divRef = useRef(null);

  useEffect(() => {
    gsap.to(heading1.current, { duration: 1, y: 0 });
    gsap.to(heading2.current, { delay: 0.4, duration: 1, y: 0 });
    gsap.to(name.current, {
      scrollTrigger: {
        trigger: name.current,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
      },
      x: 0,
    });
    gsap.to(position.current, {
      scrollTrigger: {
        trigger: position.current,
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      x: 0,
    });
    gsap.to(border.current, {
      scrollTrigger: {
        trigger: name.current,
        start: "top 80%",
      },
      opacity: 1,
    });
    gsap.to(divRef.current, {
      scrollTrigger: {
        trigger: divRef.current,
        start: "top 200px",
        end: "top 0%",
        scrub: true,
      },
      x: -1800,
      position: "fixed",
    });
  }, []);
  return (
    <>
      <main className="py-[221px] px-[80px]">
        <div className="overflow-hidden w-[780px] border-b-[10px] border-black pb-[5px]">
          <h1
            ref={heading1}
            className="translate-y-[100%] text-[108px] leading-[120%]"
          >
            Welcome to my
          </h1>
        </div>
        <div className="overflow-hidden w-[400px] border-b-[10px] border-black">
          <h1
            ref={heading2}
            className="translate-y-[100%] text-[108px] leading-[120%]"
          >
            website
          </h1>
        </div>
      </main>
      <section className="py-[121px] pb-[221px] justify-center flex px-[80px]">
        <div className="text-[92px] overflow-hidden leading-[120%] h-[500px]">
          <h1 className="translate-x-[100%] pr-[80px]" ref={name}>
            I am Ahmed
          </h1>
        </div>
        <div
          ref={border}
          className="opacity-0 border-r-[10px] border-black"
        ></div>
        <div className="text-[92px] overflow-hidden pl-[80px] flex items-end w-[500px] leading-[120%]">
          <h1 className="-translate-x-[150%]" ref={position}>
            A Web Developer
          </h1>
        </div>
      </section>
      <section className="py-[121px] h-[1200px] overflow-hidden px-[80px]">
        <div ref={divRef} className="w-[3500px] top-[200px] flex gap-[20px]">
          <div className="w-[300px] h-[400px] p-[20px] rounded-[13px] shadow-[0px_0px_10px_#00000066]">
            <h1 className="text-[30px] leading-[36px]">Heading</h1>
            <p className="mt-[12px] text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              beatae, maiores itaque vero dolores iure, tenetur dolor labore
              magnam eaque officia dolore, possimus aperiam magni corrupti
              neque. Cum, dolore dolores.
            </p>
          </div>
          <div className="w-[300px] h-[400px] p-[20px] rounded-[13px] shadow-[0px_0px_10px_#00000066]">
            <h1 className="text-[30px] leading-[36px]">Heading</h1>
            <p className="mt-[12px] text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              beatae, maiores itaque vero dolores iure, tenetur dolor labore
              magnam eaque officia dolore, possimus aperiam magni corrupti
              neque. Cum, dolore dolores.
            </p>
          </div>
          <div className="w-[300px] h-[400px] p-[20px] rounded-[13px] shadow-[0px_0px_10px_#00000066]">
            <h1 className="text-[30px] leading-[36px]">Heading</h1>
            <p className="mt-[12px] text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              beatae, maiores itaque vero dolores iure, tenetur dolor labore
              magnam eaque officia dolore, possimus aperiam magni corrupti
              neque. Cum, dolore dolores.
            </p>
          </div>
          <div className="w-[300px] h-[400px] p-[20px] rounded-[13px] shadow-[0px_0px_10px_#00000066]">
            <h1 className="text-[30px] leading-[36px]">Heading</h1>
            <p className="mt-[12px] text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              beatae, maiores itaque vero dolores iure, tenetur dolor labore
              magnam eaque officia dolore, possimus aperiam magni corrupti
              neque. Cum, dolore dolores.
            </p>
          </div>
          <div className="w-[300px] h-[400px] p-[20px] rounded-[13px] shadow-[0px_0px_10px_#00000066]">
            <h1 className="text-[30px] leading-[36px]">Heading</h1>
            <p className="mt-[12px] text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              beatae, maiores itaque vero dolores iure, tenetur dolor labore
              magnam eaque officia dolore, possimus aperiam magni corrupti
              neque. Cum, dolore dolores.
            </p>
          </div>
          <div className="w-[300px] h-[400px] p-[20px] rounded-[13px] shadow-[0px_0px_10px_#00000066]">
            <h1 className="text-[30px] leading-[36px]">Heading</h1>
            <p className="mt-[12px] text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              beatae, maiores itaque vero dolores iure, tenetur dolor labore
              magnam eaque officia dolore, possimus aperiam magni corrupti
              neque. Cum, dolore dolores.
            </p>
          </div>
          <div className="w-[300px] h-[400px] p-[20px] rounded-[13px] shadow-[0px_0px_10px_#00000066]">
            <h1 className="text-[30px] leading-[36px]">Heading</h1>
            <p className="mt-[12px] text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              beatae, maiores itaque vero dolores iure, tenetur dolor labore
              magnam eaque officia dolore, possimus aperiam magni corrupti
              neque. Cum, dolore dolores.
            </p>
          </div>
          <div className="w-[300px] h-[400px] p-[20px] rounded-[13px] shadow-[0px_0px_10px_#00000066]">
            <h1 className="text-[30px] leading-[36px]">Heading</h1>
            <p className="mt-[12px] text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              beatae, maiores itaque vero dolores iure, tenetur dolor labore
              magnam eaque officia dolore, possimus aperiam magni corrupti
              neque. Cum, dolore dolores.
            </p>
          </div>
          <div className="w-[300px] h-[400px] p-[20px] rounded-[13px] shadow-[0px_0px_10px_#00000066]">
            <h1 className="text-[30px] leading-[36px]">Heading</h1>
            <p className="mt-[12px] text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              beatae, maiores itaque vero dolores iure, tenetur dolor labore
              magnam eaque officia dolore, possimus aperiam magni corrupti
              neque. Cum, dolore dolores.
            </p>
          </div>
          <div className="w-[300px] h-[400px] p-[20px] rounded-[13px] shadow-[0px_0px_10px_#00000066]">
            <h1 className="text-[30px] leading-[36px]">Heading</h1>
            <p className="mt-[12px] text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              beatae, maiores itaque vero dolores iure, tenetur dolor labore
              magnam eaque officia dolore, possimus aperiam magni corrupti
              neque. Cum, dolore dolores.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;