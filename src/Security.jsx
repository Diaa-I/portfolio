import CV from "./Components/First/CV";
import Languages from "./Components/Languages/Languages";

import { useState } from "react";
import Nav from "./Components/Nav/Nav";
import Writeups from "./Components/Writeups/Writeups";
import VulnerabilitiesDisclosures from "./Components/VulnerabilitiesDisclosures/VulnerabilitiesDisclosures";
import Certificates from "./Components/Certificates/Certificates";
import ResearchPapers from "./Components/ResearchPapers/ResearchPapers";
import SpiningLoader from "./Components/Loader/SpiningLoader";

export default function Security({}) {
  const [hasloaded, setHasLoaded] = useState({
    // Projects: false,
    // Languages: false,
    Writeups: false,
    // Work_Experience: false,
  });
  const isStillLoading = Object.values(hasloaded).includes(false);

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
  const ResearchPMeGoTo = () =>
    document.getElementById(`ResearchPapers`).scrollIntoView();
  const navList = [
    // { name: "Me", action: meGoTo },
    { name: "Writeups", action: writeupsGoTo },
    // { name: "Vulnerability Disclosures", action: vulnGoTo },
    // { name: "Certificates", action: CertificatesGoTo },
    // { name: "Research Papers", action: ResearchPMeGoTo },
    // { name: "Languages", action: languagesGoTo },
    { name: "Contact Me", action: contactMeGoTo },
  ];

  const defaultCssClasses =
    "flex md:items-center md:justify-center bg-inherit text-[#F8FAFC]";
  return (
    <div
      className={"flex bg-[#0B0F19] text-[#F8FAFC] flex-col h-screen w-screen"}
    >
      {isStillLoading && <SpiningLoader />}

      <Nav navList={navList} page={"SEC"} />
      <Writeups setHasLoaded={setHasLoaded} />
      {/* <VulnerabilitiesDisclosures /> */}
      {/* <Certificates /> */}
      {/* <ResearchPapers /> */}
      <div className={defaultCssClasses} id="Languages">
        <Languages page="SEC" setHasLoaded={setHasLoaded} />
      </div>
      <div className={defaultCssClasses + " justify-center"} id="ContactMe">
        <hr></hr>
        <p className="p-5 lg:text-2xl text-xl ">
          You can contact me via{" "}
          <a href="https://www.linkedin.com/in/diaa-nasr/">
            <i className="devicon-linkedin-plain "></i>
          </a>
        </p>
      </div>
    </div>
  );
}
