import React, { useEffect, useRef, useState } from "react";

function Hooks() {
  const button1 = useRef(null);
  const button2 = useRef(null);
  const button3 = useRef(null);
  const [fold, setfold] = useState("Project-1");

  const handleClick1 = () => {
    setfold("Project-1");
  };
  const handleClick2 = () => {
    setfold("Project-2");
  };
  const handleClick3 = () => {
    setfold("Project-3");
  };
  useEffect(() => {
    if (fold === "Project-1") {
      button1.current.style.background = "#00000033";
    } else {
      button1.current.style.background = "";
    }
    if (fold === "Project-2") {
      button2.current.style.background = "#00000033";
    } else {
      button2.current.style.background = "";
    }
    if (fold === "Project-3") {
      button3.current.style.background = "#00000033";
    }else{
      button3.current.style.background = "";
    }
  }, [fold]);

  return (
    <section className="py-[121px] px-[80px]">
      <div className="flex gap-[82px]">
        <ul className="w-[300px]">
          <li
            onClick={handleClick1}
            ref={button1}
            className="text-center w-full h-[48px] cursor-pointer flex items-center justify-center rounded-[4px]"
          >
            Project-1
          </li>
          <li
            onClick={handleClick2}
            ref={button2}
            className="text-center w-full h-[48px] cursor-pointer flex items-center justify-center rounded-[4px]"
          >
            Project-2
          </li>
          <li
            onClick={handleClick3}
            ref={button3}
            className="text-center w-full h-[48px] cursor-pointer flex items-center justify-center rounded-[4px]"
          >
            Project-3
          </li>
        </ul>
        {fold === "Project-1" && (
          <div>
            <h1 className="text-[32px] mb-[12px]">Project-1</h1>
            <p className="w-[700px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              nulla cumque doloribus eveniet asperiores unde sit quas non, ipsam
              consequatur totam quia, delectus odit ipsum alias excepturi itaque
              accusamus id.
            </p>
          </div>
        )}
        {fold === "Project-2" && (
          <div>
            <h1 className="text-[32px] mb-[12px]">Project-2</h1>
            <p className="w-[700px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              nulla cumque doloribus eveniet asperiores unde sit quas non, ipsam
              consequatur totam quia, delectus odit ipsum alias excepturi itaque
              accusamus id.
            </p>
          </div>
        )}
        {fold === "Project-3" && (
          <div>
            <h1 className="text-[32px] mb-[12px]">Project-3</h1>
            <p className="w-[700px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              nulla cumque doloribus eveniet asperiores unde sit quas non, ipsam
              consequatur totam quia, delectus odit ipsum alias excepturi itaque
              accusamus id.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hooks;
