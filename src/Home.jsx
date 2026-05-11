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
      {viewportWidth > 1300 && wantsThreeDimensional == true && (
        <>
          <div className={defaultCssClasses + ' w-[100vw] h-[90vh]'} id="3D">
            <Canvas
              tabIndex={-1}
              onClick={() => controlsRef.current.handleCanvasClick()}
            >
              
                <ThreeDimensional controlsRef={controlsRef} />
            </Canvas>
          </div>
          <div
            className={
              defaultCssClasses +
              " flex-col flex-wrap bg-[#ECF7F8] lg:h-[15rem]"
            }
            id="3D-Credits"
          >
            <ThreeDimensionalCredits />
          </div>
        </>
      )}

      <hr></hr>
      <div className={defaultCssClasses} id="contactMe">
        <p className="p-10 m-5 lg:text-2xl text-xl">
          You can contact me via{" "}
          <a href="https://www.linkedin.com/in/diaa-nasr/">
            <i className="devicon-linkedin-plain "></i>
          </a>
        </p>
      </div>
    </>
  );
}
