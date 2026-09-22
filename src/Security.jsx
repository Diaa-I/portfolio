import Start from "./Components/First/Start";
import Projects from "./Components/Projects/Projects";
import Languages from "./Components/Languages/Languages";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import ThreeDimensional from "./Components/3D/3D";
import ThreeDimensionalCredits from "./Components/3D/3DCredits";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

export default function Security({ setPagedWanted }) {
  // const [wantsThreeDimensional, setWantsThreeDimensional] = useState(
  //   viewportWidth > 800 ? true : false,
  // );
  const [wantsThreeDimensional, setWantsThreeDimensional] = useState(false);
  const meGoTo = () => document.getElementById(`Me`).scrollIntoView();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const projectsGoTo = () =>
    document.getElementById(`Projects`).scrollIntoView();
  const languagesGoTo = () =>
    document.getElementById(`Languages`).scrollIntoView();
  const WorkExperienceGoTo = () =>
    document.getElementById(`workExperience`).scrollIntoView();
  const contactMeGoTo = () =>
    document.getElementById(`contactMe`).scrollIntoView();
  const ThreeDMeGoTo = () => document.getElementById(`3D`).scrollIntoView();

  const controlsRef = useRef();
  const inputRef = useRef(null);
  const defaultCssClasses =
    "flex md:items-center md:justify-center bg-[#0B0F19] text-[#F8FAFC]";
  const [isNavOpen, setIsNavOpen] = useState(true);
  // Listen to the browser resizing and update the state variable
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Watch 'viewportWidth' and changes navigation state accordingly
  useEffect(() => {
    if (viewportWidth > 768) {
      console.log("Switched to desktop layout");
      setIsNavOpen(true);
    }
  }, [viewportWidth]);
  return (
    <div
      className={"flex bg-[#0B0F19] text-[#F8FAFC] flex-col h-screen w-screen"}
    >
      <div className="">
        <nav
          className={
            "flex flex-col justify-center items-center md:flex-row top-0 md:place-content-evenly py-5 w-screen  md:font-semibold md:text-xl bg-[#0B0F19] text-center sticky font-semibold  lg:h-auto sm:justify-start"
          }
        >
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="md:hidden p-2 rounded bg-[#0B0F19] text-white"
          >
            {isNavOpen ? "✕ Close" : "☰ Menu"}
          </button>
          <button
            className={
              "m-1 mt-2 flex h-[2rem] rounded " +
              `${isNavOpen ? "show" : "hidden"}`
            }
            onClick={() => setPagedWanted("DEV")}
          >
            Switch to Development
          </button>
          <button
            className={
              "m-1 mt-2 flex h-[2rem] rounded " +
              `${isNavOpen ? "show" : "hidden"}`
            }
            onClick={() => setPagedWanted("")}
          >
            Back to intro
          </button>
        </nav>
        <hr></hr>
      </div>
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
