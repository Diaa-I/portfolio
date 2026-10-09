import CV from "./Components/First/CV";
import Projects from "./Components/Projects/Projects";
import Languages from "./Components/Languages/Languages";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import ThreeDimensional from "./Components/3D/3D";
import ThreeDimensionalCredits from "./Components/3D/3DCredits";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import Nav from "./Components/Nav/Nav";
import SpiningLoader from "./Components/Loader/SpiningLoader";
export default function Development({ setPagedWanted }) {
  // const [wantsThreeDimensional, setWantsThreeDimensional] = useState(
  //   viewportWidth > 800 ? true : false,
  // );
  const [hasloaded, setHasLoaded] = useState({
    Projects: false,
    Languages: false,
    Work_Experience: false,
  });
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
  const navList = [
    { name: "Projects", action: projectsGoTo },
    { name: "Languages", action: languagesGoTo },
    { name: "Work Experience", action: WorkExperienceGoTo },
    { name: "CV", action: meGoTo },
    { name: "Contact Me", action: contactMeGoTo },
    // { name: "3D", action: ThreeDMeGoTo },
  ];
  const controlsRef = useRef();
  const inputRef = useRef(null);
  const defaultCssClasses =
    "flex md:items-center md:justify-center bg-[#FAF9F6] text-[#333333]";

  const isStillLoading = Object.values(hasloaded).includes(false);

  return (
    <>
      {isStillLoading && <SpiningLoader />}
      <div className="overflow-hidden">
        <Nav navList={navList} page={"DEV"} />
      </div>
      <div
        className={
          defaultCssClasses +
          " flex flex-col items-center bg-[#ECF7F8] w-full h-auto min-h-max py-20 gap-y-12"
        }
        id="Projects"
      >
        <Projects setHasLoaded={setHasLoaded} />
      </div>
      <div className={defaultCssClasses} id="Languages">
        <Languages page="DEV" setHasLoaded={setHasLoaded} />
      </div>
      <div className={defaultCssClasses} id="workExperience">
        <WorkExperience setHasLoaded={setHasLoaded} />
      </div>
      {wantsThreeDimensional == true && (
        <>
          <hr></hr>
          <input
            ref={inputRef}
            type="text"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              fontSize: "16px",
              opacity: 0,
              overflow: "hidden",
            }}
          />
          <div className={defaultCssClasses + " w-[100vw] h-[100vh]"} id="3D">
            <Suspense fallback={<div>3D Loading, please wait...</div>}>
              <Canvas
                dpr={[1, 1.5]}
                className="w-[100vw] h-[100vh]"
                tabIndex={-1}
                onClick={() => controlsRef.current.handleCanvasClick()}
              >
                <ThreeDimensional
                  controlsRef={controlsRef}
                  inputRef={inputRef}
                />
              </Canvas>
            </Suspense>
          </div>
          <div
            className={defaultCssClasses + " flex-col bg-[#ECF7F8] p-2"}
            id="3D-Credits"
          >
            <ThreeDimensionalCredits />
          </div>
        </>
      )}
      <div
        className={
          defaultCssClasses +
          " lg:flex-row lg:h-auto lg:text-left my-0 flex-col py-12 lg:py-20"
        }
        id="Me"
      >
        <CV />
      </div>
      <hr></hr>
      <div className={defaultCssClasses + " justify-center"} id="contactMe">
        <p className="p-5 lg:text-2xl text-xl ">
          You can contact me via{" "}
          <a href="https://www.linkedin.com/in/diaa-nasr/">
            <i className="devicon-linkedin-plain "></i>
          </a>
        </p>
      </div>
    </>
  );
}
