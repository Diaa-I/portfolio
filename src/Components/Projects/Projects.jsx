import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Card from "../Cards/ProjectCard";
import Modal from "./ProjectModal";
import { supabase } from "../../supabase";

export default function Projects({ setHasLoaded }) {
  const [projectDisplayed, setProjectDisplayed] = useState("");
  const [projectsData, setProjectsData] = useState(null);
  const modal = useRef();
  function projectSelectedHandle(title) {
    setProjectDisplayed(title);
  }
  function handleModalClose() {
    setProjectDisplayed("");
  }
  function handleModalOpening() {
    modal.current.open();
  }
  useLayoutEffect(() => {
    async function loadAllProjects() {
      const { data: prjData, error: prjError } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: true });
      if (prjError) {
        console.error(prjError);
        return;
      }
      setProjectsData(prjData);
      setHasLoaded((oldData) => ({ ...oldData, Projects: true }));
    }
    loadAllProjects();
  }, []);
  useEffect(() => {
    if (projectDisplayed != "") {
      handleModalOpening();
    }
  }, [projectDisplayed]);
  if (projectsData == null) return <p>Loading ...</p>;
  const selectedProject = projectsData.find(
    (prj) => prj.title == projectDisplayed,
  );
 return (
   <div className="flex flex-col mt-10 w-[90vw] mx-auto px-4 font-mono text-sm text-[#121B13]">
    
    <div className="mb-8 border-b border-[#C2CDC2] pb-4 w-full">
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl text-[#121B13]">
        PROJECTS
        <span className="text-[#0284C7]">.sh</span>
      </h1>
    </div>

    {projectDisplayed !== "" && (
      <Modal
        prj_details={selectedProject}
        ref={modal}
        onCloseModal={handleModalClose}
      />
    )}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full items-stretch">
      {projectsData.map((project) => {
        return (
          <Card
            key={project.id}
            onClickFn={projectSelectedHandle}
            onCloseModal={handleModalClose}
            prj_details={project}
          />
        );
      })}
    </div>
  </div>

);

}
