import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Card from "../Cards/ProjectCard";
import Modal from "./ProjectModal";
import { supabase } from "../../supabase";

export default function Projects() {
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
