import Home from "./Home";
import { useState } from "react";

function App() {
  const meGoTo = () => document.getElementById(`Me`).scrollIntoView();
  const viewportWidth = window.innerWidth;
  const projectsGoTo = () =>
    document.getElementById(`Projects`).scrollIntoView();
  const languagesGoTo = () =>
    document.getElementById(`Languages`).scrollIntoView();
  const WorkExperienceGoTo = () =>
    document.getElementById(`workExperience`).scrollIntoView();
  const contactMeGoTo = () =>
    document.getElementById(`contactMe`).scrollIntoView();
  const ThreeDMeGoTo = () => document.getElementById(`3D`).scrollIntoView();
  const [wantsThreeDimensional, setWantsThreeDimensional] = useState(viewportWidth> 1300 ?"NOT_SET" :false);
  if (wantsThreeDimensional == "NOT_SET")
    return (
      <div className="grid grid-cols-2 bg-black h-[100vh] w-[100vw]">
        <button
          onClick={() => {
            setWantsThreeDimensional(false);
          }}
          className="w-full h-full flex flex-col items-center justify-center p-8 transition-all duration-300 bg-purple-900 text-white hover:bg-purple-800 border-r border-purple-700"
        >
          <p className="text-3xl font-bold">Normal Experience</p>
        </button>

        <button
          className="w-full h-full flex flex-col items-center justify-center p-8 transition-all duration-300 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 border-r border-zinc-700"
          onClick={() => {
            setWantsThreeDimensional(true);
          }}
        >
          <p className="text-3xl font-bold">Normal + 3D Experience</p>
        </button>
      </div>
    );

  return (
    <div className="overflow-hidden">
      <nav className="flex flex-row top-0 border-t-2  border-[#333333] place-content-evenly py-5 w-screen bg-[#FAF9F2] text-center sticky font-semibold md:text-xl">
        <button className="m-1 mt-2 flex h-[2rem] rounded" onClick={meGoTo}>
          Me
        </button>
        <button
          className="m-1 mt-2 flex h-[2rem] rounded"
          onClick={projectsGoTo}
        >
          Projects
        </button>
        <button
          className="m-1 mt-2 flex h-[2rem] rounded"
          onClick={languagesGoTo}
        >
          Languages
        </button>
        <button
          className="m-1 mt-2 flex h-[2rem] rounded"
          onClick={WorkExperienceGoTo}
        >
          Work Experience
        </button>
        <button
          className="m-1 mt-2 flex h-[2rem] rounded"
          onClick={contactMeGoTo}
        >
          Contact Me
        </button>
        {viewportWidth > 1300 && wantsThreeDimensional && (
          <button
            className="m-1 mt-2 flex h-[2rem] rounded"
            onClick={ThreeDMeGoTo}
          >
            3D
          </button>
        )}
      </nav>
      <Home wantsThreeDimensional={wantsThreeDimensional} />
    </div>
  );
}

export default App;
