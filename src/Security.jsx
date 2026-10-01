import Start from "./Components/First/Start";
import Projects from "./Components/Projects/Projects";
import Languages from "./Components/Languages/Languages";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import ThreeDimensional from "./Components/3D/3D";
import ThreeDimensionalCredits from "./Components/3D/3DCredits";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Nav from "./Components/Nav/Nav";

export default function Security({ setPagedWanted }) {
  // const [wantsThreeDimensional, setWantsThreeDimensional] = useState(
  //   viewportWidth > 800 ? true : false,
  // );
  const [wantsThreeDimensional, setWantsThreeDimensional] = useState(false);
  const meGoTo = () => document.getElementById(`Me`).scrollIntoView();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  // const projectsGoTo = () =>
  //   document.getElementById(`Projects`).scrollIntoView();
  // const languagesGoTo = () =>
  //   document.getElementById(`Languages`).scrollIntoView();
  // const WorkExperienceGoTo = () =>
  //   document.getElementById(`workExperience`).scrollIntoView();
  // const contactMeGoTo = () =>
  //   document.getElementById(`contactMe`).scrollIntoView();
  // const ThreeDMeGoTo = () => document.getElementById(`3D`).scrollIntoView();
  const navList = [
    // { name: "Me", action: meGoTo },
    // { name: "Projects", action: projectsGoTo },
    // { name: "Languages", action: languagesGoTo },
    // { name: "Work Experience", action: WorkExperienceGoTo },
    // { name: "Contact Me", action: contactMeGoTo },
    // { name: "3D", action: ThreeDMeGoTo },
  ];
  const controlsRef = useRef();
  const inputRef = useRef(null);
  const defaultCssClasses =
    "flex md:items-center md:justify-center bg-[#0B0F19] text-[#F8FAFC]";

  return (
    <div
      className={"flex bg-[#0B0F19] text-[#F8FAFC] flex-col h-screen w-screen"}
    >
      <Nav setPagedWanted={setPagedWanted} navList={navList} page={"SEC"}/>
      <div className="flex flex-col w-screen h-screen items-center justify-center">
        <p className="font-mono md:text-[5rem]">Coming soon ...</p>
      </div>
      <div className={defaultCssClasses + " justify-center"} id="contactMe">
        <hr></hr>
        <p className="p-5 lg:text-2xl text-xl ">
          You can contact me via{" "}
          <a href="https://www.linkedin.com/in/diaa-nasr/">
            <i className="devicon-linkedin-plain "></i>
          </a>
        </p>
      </div>
    </div>
  );
}
