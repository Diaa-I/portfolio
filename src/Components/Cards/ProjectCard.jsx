import { useRef, useState } from "react";
import reactImg from "../../assets/react.svg";
import Modal from "../Projects/ProjectModal";
export default function ProjectCard({
  prj_details,
  onClickFn,
  selectedProject,
  onCloseModal
}) {
  const title = prj_details["title"];
  const description = prj_details["description"];
  const role = prj_details["role"];

  let classes = "flex rounded-xl sm:w-[25rem] sm:h-[15rem] w-[22rem] h-[15rem] content-center flex-col items-center justify-center m-3 text-center  shadow-xl border-2 border-[#333]/[0.1] cursor-pointer md:hover:scale-110"
  let divSettings = { className: classes }






return (
  <div  
    {...divSettings} 
    onClick={() => onClickFn(title)}
    className="p-6 bg-white border border-[#C2CDC2] rounded-lg shadow-sm cursor-pointer group transition-all duration-200 hover:border-[#121B13]/40 flex flex-col justify-between"
  >
    <div>
      <div className="flex items-start justify-between border-b border-[#EAEFEA] pb-2 mb-3">
        <h2 className="text-xl font-black tracking-tight text-[#121B13] group-hover:text-[#0284C7] transition-colors">
          {title}
        </h2>
        <span className="text-[10px] font-bold text-[#121B13]/40 bg-[#EAEFEA] px-2 py-0.5 rounded uppercase select-none">
          PROJ
        </span>
      </div>
      
      <p className="text-xs font-bold text-[#0284C7] uppercase tracking-wider mb-2">
        Role: {role}
      </p>
      
      <p className="text-[#1F2E21] font-sans text-sm leading-relaxed mb-4">
        {description}
      </p>
    </div>

    <p className="text-xs font-bold text-[#0284C7] group-hover:underline flex items-center gap-1">
      <span>view_more</span>
      <span className="group-hover:translate-x-0.5 transition-transform">›</span>
    </p>
  </div>
);

}
