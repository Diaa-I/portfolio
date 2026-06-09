import seniorDemo from "/public/DORA_Demo.webm";
import LibraryVideo from "/public/LibraryProject.webm";
import GameDemo from "/public/GameDemo.webm";
const ProjectsData = [
  {
    title: "HRFhome",
    description:
      "I was the sole backend engineer in a two-person team, responsible for building the core engine of an e-commerce marketplace for buying and selling handmade crafts.",
    indepth_description: "As the sole backend engineer, I architected and built the entire RESTful API layer using PHP Laravel to power both the admin management and supplier vendor dashboards. I also re-architected and optimized the MySQL database schemas to streamline transaction histories and product listings, while implementing Pest PHP to establish a robust automated testing suite that ensured API reliability and stable deployments.",
    role: "Backend Developer",
    link: "https://hrfhome.app/",
    vidSrc: "",
    id: 1,
    tech_stack:"Tech Stack: PHP (Laravel), MySQL, Pest PHP, JavaScript, RESTful APIs"
  },
  {
    title: "SMN food",
    description:
      "I was the sole backend engineer in a two-person team, responsible for building the core engine of an e-commerce marketplace for buying and selling handmade crafts.",
    indepth_description: "As the sole backend engineer, I architected and built the entire RESTful API layer using PHP Laravel to power both the admin management and supplier vendor dashboards for this homemade food marketplace. I also re-architected and optimized the MySQL database schemas to streamline order transactions and local food listings, while implementing Pest PHP to establish a robust automated testing suite that ensured API reliability and stable deployments.",
    role: "Backend Developer",
    link: "https://smnfood.app/",
    vidSrc: "",
    id: 2,
    tech_stack:"Tech Stack: PHP (Laravel), MySQL, Pest PHP, JavaScript, RESTful APIs"
  },
  {
    title: "D.O.R.A",
    description:
      "Dynamic Object Recongintion and Annotation, an AI-assisted web application built by a three-member team to speed up the data labeling process for supervised machine learning by automatically predicting annotations on video frames.",
    indepth_description: "For my senior project, I worked in a three-member team to build D.O.R.A, an AI-assisted web application designed to accelerate the tedious manual data labeling required for supervised learning. As the core developer for the web platform, I engineered the Flask backend, designed the flexible MongoDB schema, and built the pipeline connecting our web services to the YOLOv8 computer vision module. I integrated these backend systems with a React frontend to handle the data flow for an innovative tracking feature: users annotate a small segment of a video to train an initial model, which then automatically generates annotation suggestions for subsequent frames that the user can instantly accept or reject.",
    role: "Full Stack Developer",
    link: "https://github.com/Diaa-I/D.O.R.A-Senior-Project",
    vidSrc: seniorDemo,
    id: 3,
    tech_stack:"Tech Stack: Python (Flask), MongoDB, React, JavaScript, YOLOv8, OpenCV (cv2)"
  },
  {
    title: "Internal Data Management Platform (Confidential)",
    description:
      "A centralized relational data platform built to replace fragmented, slow Excel workflows containing over 100,000+ rows of academic data with a high-performance database system.",
    indepth_description: "I served as the Team Lead for a three-developer team, working directly with a university professor to transition their research operations from Excel spreadsheets to a centralized relational database system. I architected the core database schema to establish a structured data layout and ensure long-term data integrity. On the backend, I built Node.js RESTful APIs to handle bulk data imports, advanced multi-attribute filtering, and efficient pagination to easily process and query datasets exceeding 100,000 records. Because of strict academic data privacy requirements, I engineered the system for a secure local deployment and personally led the final delivery demonstration to the client.",
    role: "Software Developer / Mentor",
    link: "",
    vidSrc: "",
    id: 4,
    tech_stack:"Tech Stack: Node.js, Express, SQL, EJS, JavaScript"
  },
  {
    title: "My-Home-Library",
    description:
      "A full-stack personal project mapping physical book collections into an interactive 3D space, featuring a secure, token-authorized backend to track personal user libraries.",
    indepth_description: "I am building a full-stack virtual library application from scratch that mirrors real-world book collections inside an interactive, 3D digital bookshelf environment. While handling the entire development lifecycle, my primary focus has been engineering a secure, robust relational backend engine to reliably power the 3D frontend data synchronization. I architected the complete user system using token-based authentication and authorization to protect private user profiles, designed the relational PostgreSQL database schemas, and developed the core RESTful API endpoints that handle adding, tracking, and removing books inside a user's custom library environment.",
    role: "Full Stack Developer",
    link: "",
    vidSrc: LibraryVideo,
    id: 5,
    tech_stack:"Tech Stack: Node.js, Express, PostgreSQL, JavaScript, React, React Three Fiber"
  },
  {
    title: "Portfolio",
    description: "The responsive frontend portfolio website you are currently viewing, built to showcase my full-stack capabilities and technical project portfolio.",
    indepth_description: "I designed and developed this portfolio website from scratch to present my engineering projects, technical case studies, and full-stack capabilities in a clean, modern interface. Using React for component-driven UI architecture and Tailwind CSS for rapid, utility-first styling, I focused on creating a highly scannable layout with optimized structures and smooth navigation. Building this site allowed me to demonstrate clean client-side presentation capabilities to complement my primary backend expertise, serving as a centralized hub to showcase my complete body of work.",
    role: "Full Stack Developer",
    link: "",
    vidSrc: "",
    id: 6,
    tech_stack:"Tech Stack: React, Tailwind CSS, JavaScript, HTML5"
  },
  {
    title: "IoT Smart Trash Classifier (University  Course Project)",
    description:
      "A computer vision-based hardware platform built by a five-member team that utilizes a camera module to instantly identify and categorize waste types for automated sorting.",
    indepth_description: "I worked in a five-member engineering team to build a physical, computer vision-based trash classifier designed to automate waste sorting. My core responsibility was configuring, programming, and deploying the Raspberry Pi engine. I wrote the scripts to interface with the hardware camera module, handled the real-time image capture pipeline, and optimized the local processing workflows to feed data cleanly into our computer vision sorting model. This project allowed me to gain strong practical experience in IoT device management, hardware-software integration, and resource-constrained programming.",
    role: "Software Developer",
    link: "https://github.com/YaserAlOsh/trash_classifier",
    vidSrc: "",
    id: 7,
    tech_stack:"Tech Stack: Python, Raspberry Pi, Linux, Computer Vision"
  },
  {
    title: "The Unexpected (University Course Project)",
    description:
      "A challenging, multi-level game built by a two-member team for a university course, featuring custom gameplay mechanics and enemy behavior patterns..",
    indepth_description: "I worked in a two-developer team for a university course to build an intense, multi-level game from scratch in Unity. I was responsible for designing, scripting, and programming the entire second level of the game. Using C#, I wrote the core gameplay scripts, managed the physics engines, and programmed the enemy tracking, movement paths, and obstacle logic to deliver a seamless, responsive player experience.",
    role: "Software Developer",
    link: "https://github.com/Diaa-I/The-Unexpected",
    vidSrc: GameDemo,
    id: 8,
    tech_stack:"Tech Stack: Unity, C#"
  },


];
export default ProjectsData;
