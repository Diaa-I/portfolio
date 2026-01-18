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

  let classes = "flex rounded-xl w-[25rem] h-[15rem] content-center flex-col items-center justify-center m-3 text-center  shadow-xl border-2 border-[#333]/[0.1] cursor-pointer md:hover:scale-110"
  let divSettings = { className: classes }




  return (
    <>
      <div  {...divSettings} onClick={() => onClickFn(title)}>

        <h2 className="font-extrabold text-[#333333]  text-2xl">{title}</h2>
        {/* The description here should be 1 sentence or two, as well as my role, when clicking it will display more information */}
        <p className="text-[#333333] font-bold text-l">{role}</p>
        <p className="w-[20rem] text-[#333333]">{description}</p>
        <p className="text-blue-500 font-bold">Learn More</p>
      </div>
    </>
  );
}
