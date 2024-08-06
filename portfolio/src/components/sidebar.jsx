import React from "react";
import Github from "../assets/github-portfolio.png";
import Linkedin from "../assets/linkedin-icon.webp";
import Resume from "../assets/resume-icon.jpg";
import Arrow from "../assets/arrow.svg";
import { useEffect, useRef, useState } from "react";
function Sidebar() {
  const [visibility, setVisibility] = useState(false);
  const div = useRef(null);
  const view = () => {
    setVisibility(!visibility);
  };

  useEffect(() => {
    if (visibility === true) {
      // for (let i = 0; i <= 100; i++) {
      //   setTimeout((div.current.style.left = `${i}px`), 1000);
      // }
      div.current.style.left = `0px`
    } else {
      div.current.style.left = "-100px";
    }
  }, [visibility]);
  return (
    <aside className="fixed bottom-[200px]">
      <ul className="flex flex-col items-center gap-[12px]">
        <li
          onClick={view}
          className="w-[50px] h-[50px] bg-[#f0f0f0] flex items-center justify-center rounded-[7px]"
        >
          <img src={Arrow} width={30} height={30} alt="" />
        </li>
        <div ref={div} className="flex-col relative flex bg-white p-[8px] rounded-[13px] gap-[14px]">
          <li>
            <a href="">
              <img src={Github} className="bg-white rounded-[50%]" width={30} height={30} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={Linkedin} width={30} height={30} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img
                src={Resume}
                className="rounded-[50%]"
                width={30}
                height={30}
                alt=""
              />
            </a>
          </li>
        </div>
      </ul>
    </aside>
  );
}

export default Sidebar;
