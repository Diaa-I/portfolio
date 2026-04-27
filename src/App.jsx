import Start from "./Components/First/Start";
import Projects from "./Components/Projects/Projects";
import Languages from "./Components/Languages/Languages";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import ThreeDimensional from "./Components/3D/3D";

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
  const defaultCssClasses =
    "flex md:items-center md:justify-center bg-[#FAF9F6] text-[#333333]";
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
        {viewportWidth > 1300 && (
          <button
            className="m-1 mt-2 flex h-[2rem] rounded"
            onClick={ThreeDMeGoTo}
          >
            3D
          </button>
        )}
      </nav>
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
      {viewportWidth > 1300 && (
        <div className={defaultCssClasses} id="3D">
          <ThreeDimensional />
        </div>
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
    </div>
  );
}

export default App;
