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
    <>
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          My Projects
          <span className="text-cyan-400">.</span>
        </h1>
      </div>
      {projectDisplayed != "" && (
        <Modal
          prj_details={selectedProject}
          ref={modal}
          onCloseModal={handleModalClose}
        ></Modal>
      )}
      <div className="flex flex-row flex-wrap justify-center lg:w-[90vw] w-auto h-auto">
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
    </>
  );
}
