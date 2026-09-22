import Start from "./Components/First/Start";
import Projects from "./Components/Projects/Projects";
import Languages from "./Components/Languages/Languages";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import ThreeDimensional from "./Components/3D/3D";
import ThreeDimensionalCredits from "./Components/3D/3DCredits";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";

export default function Development({ setPagedWanted }) {
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
    "flex md:items-center md:justify-center bg-[#FAF9F6] text-[#333333]";
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
    <>
      <div className="overflow-hidden">
        <nav className=" flex flex-col justify-center items-center md:flex-row top-0 md:place-content-evenly py-5 w-screen  md:font-semibold md:text-xl bg-[#FAF9F2] text-center sticky font-semibold  lg:h-auto sm:justify-start">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="md:hidden p-2 rounded bg-[#FAF9F2] text-[#333333]"
          >
            {isNavOpen ? "✕ Close" : "☰ Menu"}
          </button>
          <button
            className={
              "m-1 mt-2 flex h-[2rem] rounded " +
              `${isNavOpen ? "show" : "hidden"}`
            }
            onClick={meGoTo}
          >
            Me
          </button>
          <button
            className={
              "m-1 mt-2 flex h-[2rem] rounded " +
              `${isNavOpen ? "show" : "hidden"}`
            }
            onClick={projectsGoTo}
          >
            Projects
          </button>
          <button
            className={
              "m-1 mt-2 flex h-[2rem] rounded " +
              `${isNavOpen ? "show" : "hidden"}`
            }
            onClick={languagesGoTo}
          >
            Languages
          </button>
          <button
            className={
              "m-1 mt-2 flex h-[2rem] rounded " +
              `${isNavOpen ? "show" : "hidden"}`
            }
            onClick={WorkExperienceGoTo}
          >
            Work Experience
          </button>
          <button
            className={
              "m-1 mt-2 flex h-[2rem] rounded " +
              `${isNavOpen ? "show" : "hidden"}`
            }
            onClick={contactMeGoTo}
          >
            Contact Me
          </button>
          {wantsThreeDimensional == true && (
            <button
              className={
                "m-1 mt-2 flex h-[2rem] rounded " +
                `${isNavOpen ? "show" : "hidden"}`
              }
              onClick={ThreeDMeGoTo}
            >
              3D
            </button>
          )}
          <button
            className={
              "m-1 mt-2 flex h-[2rem] rounded " +
              `${isNavOpen ? "show" : "hidden"}`
            }
            onClick={() => setPagedWanted("SEC")}
          >
            Switch to Security
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
      </div>
      <div
        className={
          defaultCssClasses +
          " lg:flex-row lg:h-auto lg:text-left my-0 flex-col py-12 lg:py-20"
        }
        id="Me"
      >
        <Start />
      </div>
      <div
        className={
          defaultCssClasses +
          " flex flex-col items-center bg-[#ECF7F8] w-full h-auto min-h-max py-20 gap-y-12"
        }
        id="Projects"
      >
        <Projects />
      </div>
      <div className={defaultCssClasses} id="Languages">
        <Languages />
      </div>
      <div className={defaultCssClasses} id="workExperience">
        <WorkExperience />
      </div>
      <hr></hr>
      {wantsThreeDimensional == true && (
        <>
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
