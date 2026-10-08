import CV from "./Components/First/CV";
import Projects from "./Components/Projects/Projects";
import Languages from "./Components/Languages/Languages";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import ThreeDimensional from "./Components/3D/3D";
import ThreeDimensionalCredits from "./Components/3D/3DCredits";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Nav from "./Components/Nav/Nav";
import Writeups from "./Components/Writeups/Writeups";
import VulnerabilitiesDisclosures from "./Components/VulnerabilitiesDisclosures/VulnerabilitiesDisclosures";
import Certificates from "./Components/Certificates/Certificates";
import ResearchPapers from "./Components/ResearchPapers/ResearchPapers";

export default function Security({ setPagedWanted }) {
  // const [wantsThreeDimensional, setWantsThreeDimensional] = useState(
  //   viewportWidth > 800 ? true : false,
  // );
  const [wantsThreeDimensional, setWantsThreeDimensional] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const meGoTo = () => document.getElementById(`Me`).scrollIntoView();
  const vulnGoTo = () =>
    document.getElementById(`VulnerabilityDisclosures`).scrollIntoView();
  const writeupsGoTo = () =>
    document.getElementById(`Writeups`).scrollIntoView();
  const languagesGoTo = () =>
    document.getElementById(`Languages`).scrollIntoView();
  const CertificatesGoTo = () =>
    document.getElementById(`Certificates`).scrollIntoView();
  const contactMeGoTo = () =>
    document.getElementById(`ContactMe`).scrollIntoView();
  const ResearchPMeGoTo = () => document.getElementById(`ResearchPapers`).scrollIntoView();
  const navList = [
    // { name: "Me", action: meGoTo },
    // { name: "Writeups", action: writeupsGoTo },
    // { name: "Vulnerability Disclosures", action: vulnGoTo },
    // { name: "Certificates", action: CertificatesGoTo },
    // { name: "Research Papers", action: ResearchPMeGoTo },
    // { name: "Languages", action: languagesGoTo },
    // { name: "Contact Me", action: contactMeGoTo },
  ];
  const controlsRef = useRef();
  const inputRef = useRef(null);
  const defaultCssClasses =
    "flex md:items-center md:justify-center bg-[#0B0F19] text-[#F8FAFC]";

  return (
    <div
      className={"flex bg-[#0B0F19] text-[#F8FAFC] flex-col h-screen w-screen"}
    >
      <Nav setPagedWanted={setPagedWanted} navList={navList} page={"SEC"} />
      
      <div className="flex flex-col w-screen h-screen items-center justify-center" id='Writeups'>
      <p className="font-mono md:text-[5rem]">Coming soon ...</p>
    </div>
      <div className={defaultCssClasses + " justify-center"} id="ContactMe">
        <hr></hr>
        <p className="p-5 lg:text-2xl text-xl ">
          You can contact me via
          <a href="https://www.linkedin.com/in/diaa-nasr/">
            <i className="devicon-linkedin-plain "></i>
          </a>
        </p>
      </div>
    </div>
  );
}
