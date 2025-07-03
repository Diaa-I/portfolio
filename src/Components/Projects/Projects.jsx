import { useEffect, useRef, useState } from "react";
import Card from "../Cards/ProjectCard";
import Modal from "./ProjectModal";
import ProjectsData from "../../../data/projects.data";

export default function Projects() {
  const [projectDisplayed, setProjectDisplayed] = useState("");
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
  useEffect(() => {
    if (projectDisplayed != "") {
      handleModalOpening();
    }
  }, [projectDisplayed]);

  const selectedProject = ProjectsData.find(
    (prj) => prj.title == projectDisplayed
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
      <div className="flex flex-row flex-wrap justify-center w-[90vw]">
        {ProjectsData.map((project) => {
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
