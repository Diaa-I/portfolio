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
  const [wantsThreeDimensional, setWantsThreeDimensional] = useState(viewportWidth> 800 ? true :false);
  

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
        {wantsThreeDimensional == true && (
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
