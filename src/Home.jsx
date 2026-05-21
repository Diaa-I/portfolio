import Start from "./Components/First/Start";
import Projects from "./Components/Projects/Projects";
import Languages from "./Components/Languages/Languages";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import ThreeDimensional from "./Components/3D/3D";
import ThreeDimensionalCredits from "./Components/3D/3DCredits";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";

export default function Home({ wantsThreeDimensional }) {
  const viewportWidth = window.innerWidth;
  const controlsRef = useRef();
  const inputRef = useRef(null);
  const defaultCssClasses =
    "flex md:items-center md:justify-center bg-[#FAF9F6] text-[#333333]";
  return (
    <>
      <div
        className={
          defaultCssClasses +
          " lg:flex-row lg:h-[50rem] lg:text-left lg:my-0 flex-col"
        }
        id="Me"
      >
        <Start />
      </div>
      <div
        className={
          defaultCssClasses + " flex-col flex-wrap bg-[#ECF7F8] lg:h-[50rem]"
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
          <div
            className={defaultCssClasses + " w-[100vw] h-[100vh]"}
            id="3D"
          >
            <Suspense fallback={<div>3D Loading, please wait...</div>}>
              <Canvas
              dpr={[1,1.5]}
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
            className={
              defaultCssClasses +
              " flex-col bg-[#ECF7F8] p-2"
            }
            id="3D-Credits"
          >
            <ThreeDimensionalCredits />
          </div>
        </>
      )}

      <hr></hr>
      <div className={defaultCssClasses} id="contactMe">
        <p className="p-5 lg:text-2xl text-xl">
          You can contact me via{" "}
          <a href="https://www.linkedin.com/in/diaa-nasr/">
            <i className="devicon-linkedin-plain "></i>
          </a>
        </p>
      </div>
    </>
  );
}
