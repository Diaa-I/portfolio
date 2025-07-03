import Start from "./Components/First/Start";
import Projects from "./Components/Projects/Projects";
import Languages from "./Components/Languages/Languages";
import WorkExperience from "./Components/WorkExperience/WorkExperience";

function App() {
  const meGoTo = () => document.getElementById(`Me`).scrollIntoView();

  const projectsGoTo = () =>
    document.getElementById(`Projects`).scrollIntoView();
  const languagesGoTo = () =>
    document.getElementById(`Languages`).scrollIntoView();
  const WorkExperienceGoTo = () =>
    document.getElementById(`workExperience`).scrollIntoView();
  const contactMeGoTo = () =>
    document.getElementById(`contactMe`).scrollIntoView();
  const defaultCssClasses =
    "flex items-center justify-center bg-[#FAF9F6] text-[#333333]";
  return (
    <div className="overflow-hidden">
      <nav className="flex flex-row top-0 border-t-2  border-[#333333] place-content-evenly py-5 w-screen bg-[#FAF9F2] text-center sticky font-semibold text-xl">
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
      </nav>

      <div className={defaultCssClasses + " flex-row h-[50rem]"} id="Me">
        <Start />
      </div>

      <div
        className={
          defaultCssClasses + " flex-col flex-wrap bg-[#ECF7F8] h-[50rem]"
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
      <div className={defaultCssClasses} id="contactMe">
        <p className="p-10 m-5 text-2xl">
          You can contact me via{" "}
          <a href="https://www.linkedin.com/in/diaa-nasr/">
            <i className="devicon-linkedin-plain "></i>
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
