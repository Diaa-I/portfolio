import CV from "./Components/First/CV";
import Projects from "./Components/Projects/Projects";
import Languages from "./Components/Languages/Languages";
import WorkExperience from "./Components/WorkExperience/WorkExperience";

import Nav from "./Components/Nav/Nav";
import SpiningLoader from "./Components/Loader/SpiningLoader";
import ContactMe from "./Components/ContactMe/ContactMe";
export default function Development({ setPagedWanted }) {
  const [hasloaded, setHasLoaded] = useState({
    Projects: false,
    Languages: false,
    Work_Experience: false,
  });
  const meGoTo = () => document.getElementById(`Me`).scrollIntoView();
  const projectsGoTo = () =>
    document.getElementById(`Projects`).scrollIntoView();
  const languagesGoTo = () =>
    document.getElementById(`Languages`).scrollIntoView();
  const WorkExperienceGoTo = () =>
    document.getElementById(`workExperience`).scrollIntoView();
  const contactMeGoTo = () =>
    document.getElementById(`ContactMe`).scrollIntoView();
 
  const navList = [
    { name: "Projects", action: projectsGoTo },
    { name: "Languages", action: languagesGoTo },
    { name: "Work Experience", action: WorkExperienceGoTo },
    { name: "CV", action: meGoTo },
    { name: "Contact Me", action: contactMeGoTo },
  ];

  const defaultCssClasses =
    "flex md:items-center md:justify-center bg-[#EAEFEA] text-[#333333]";

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
          " flex flex-col items-center  w-full h-auto min-h-max py-20 gap-y-12"
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
      
      <div
        className={
          defaultCssClasses +
          " lg:flex-row lg:h-auto lg:text-left my-0 flex-col py-12 lg:py-20"
        }
        id="Me"
      >
        <CV />
      </div>
      <div className={defaultCssClasses} id="ContactMe">
        <ContactMe page={"DEV"} />
      </div>
    </>
  );
}
