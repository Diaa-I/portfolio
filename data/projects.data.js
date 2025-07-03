import seniorDemo from "/src/assets/This is the demo.mp4";
import LibraryVideo from "/src/assets/LibraryProject.mp4";
// import testVideo from "/src/assets/Final.mp4";
import GameDemo from "/src/assets/GameDemo.mp4";
const ProjectsData = [
  {
    title: "HRF home",
    description:
      "A E-commerce website for handmade crafts.",
    indepth_description: "I was in a team of 2 members, I was responsible for developing the backend for the supplier and admin dashboards and designing and improving the database schemas for this project, I used Laravel, MySQL, and pest.",
    role: "Backend Developer",
    link: "https://hrfhome.app/",
    vidSrc: "",
    id: 1,
  },
  {
    title: "SMN food",
    description:
      "A E-commerce website for homemade foods.",
    indepth_description: "I was in a team of 2 members, I was responsible for developing the backend for the supplier and admin dashboards and designing and improving the database schemas for this project, I used Laravel, and MySQL.",
    role: "Backend Developer",
    link: "https://smnfood.app/",
    vidSrc: "",
    id: 2,
  },
  {
    title: "D.O.R.A",
    description:
      "My Senior project, Known as Dynamic Object Recongintion and Annotation, it reduced the time needed to annotate images and videos with the help of AI.",
    indepth_description: "A team of 3 members, we developed an image anontation tool that helps reduce the time needed  to annotate images and videos, I was responsible of the developement of the website and database and the connection between the backend and the AI module, we used YoloV8, Flask, MongoDB, and React.",
    role: "Full Stack Developer",
    link: "https://github.com/Diaa-I/D.O.R.A-Senior-Project",
    vidSrc: seniorDemo,
    id: 3,
  },
  {
    title: "My-Home-Library",
    description:
      "A Virtual Library, keep track of all the books available at your home library.",
    indepth_description: "I Developed the website, and developed the authentication system from scratch using json tokens and refresh tokens to keep the user logged in, I used NodeJS, React, ThreeJS, PostgresSQL",
    role: "Full Stack Developer",
    link: "",
    vidSrc: LibraryVideo,
    id: 4,
  },
  {
    title: "Portfolio",
    description: "My page (This one).",
    indepth_description: "My personal page, I used React and tailwindcss",
    role: "Full Stack Developer",
    link: "",
    vidSrc: "",
    id: 5,
  },
  {
    title: "Confidential",
    description:
      "Built a website that is capable of filtering, import and exporting data.",
    indepth_description: "I was the lead on this project of a team of 3 developers, we designed and developed the whole application. I used NodeJS, MongoDB, and Ejs",
    role: "Software Developer / Mentor",
    link: "",
    vidSrc: "",
    id: 6,
  },
  {
    title: "Trash Classifer",
    description:
      "Built a trash classifier with a team of 5 members that had a camera and AI model.",
    indepth_description: "I was a member in a team of 5 that developed a trash classifier, implemented on a raspberry pi with an AI model and a camera to detect what type of trash the photo you took is, I configured and coded the Raspberry pi and camera, this project was for our Software engineering course. ",
    role: "Software Developer",
    link: "https://github.com/YaserAlOsh/trash_classifier",
    vidSrc: "",
    id: 7,
  },
  {
    title: "The Unexpected",
    description:
      "A Game not for the weak, the video shows the level I developed.",
    indepth_description: "I was part of a team of 2 developers, we worked on the game which had two levels, the level you are watching is the level I developed, we used Unity, C#.",
    role: "Software Developer",
    link: "https://github.com/Diaa-I/The-Unexpected",
    vidSrc: GameDemo,
    id: 8,
  },


];
export default ProjectsData;
