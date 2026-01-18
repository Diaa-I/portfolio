import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import cssClasses from "./AnimationLibrary.module.css";
import BookData from "./BookData";
import Book from "./Book";
import { useState } from "react";
import { FrontSide, TextureLoader } from "three";
import HSDiplomaIMG from "/src/assets/Diploma_HighSchool.jpeg";
import BachelorsIMG from "/src/assets/Diploma.png";
import { OrbitControls } from "@react-three/drei";
import ProjectsData from "../../../data/projects.data";
import CoursesData from "../../../data/courses.data";
import LanguagesData from "../../../data/languages.data";


function CameraRig({ position }) {
  let [x, y, z] = position;
  console.log(x, y, z);
  useFrame((state) => {
    state.camera.position.lerp({ x, y, z }, 0.1);
    state.camera.lookAt(0, 0, 0);
  });
}
function retrieveData(category) {
  let data;
  switch (category) {
    case "me":
      data = { "left_title": "Me", "left_content": ['More About Me'] };
      break;
    case "projects":
      data = ProjectsData;
      break;
    case "courses":
      data = CoursesData;
      break;
    case "languages":
      data = { "left_title": "Me", "left_content": ['First Lanuage'] };
      break;
    case "memberships":
      data = { "left_title": "Me", "left_content": ['GDSC Lead'] };
      break;
    case "work_experience":
      data = { "left_title": "Me", "left_content": [''] };
      break;
    default:
      data = { "left_title": "Empty", "left_content": ['Nothing To See'] };
      break;
  }
  return data;
}

export default function AnimationLibrary() {
  const [hasOpenedBook, setHasOpenedBook] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 15]);
  const highSchoolDiploma = useLoader(TextureLoader, HSDiplomaIMG);
  const Bachelors = useLoader(TextureLoader, BachelorsIMG);

  function changeCameraPosition(position) {
    let [x, y, z] = position;
    setCameraPosition([x, y, z]);
  }
  function openBook() {
    setHasOpenedBook(true);
    changeCameraPosition([0, 0, 70]);
  }
  function closeBook() {
    setHasOpenedBook(false);
    changeCameraPosition([0, 0, 15]);
  }

  console.log("Camera has changed location Libary", cameraPosition);

  return (
    <>
      <div className={cssClasses["canvas-container"]}>
        <h2 className="mb-7 text-4xl font-bold text-center text-black">
          Animation
        </h2>
        <Canvas
          camera={{
            fov: 100,
            aspect: 2,
            near: 0.1,
            far: 100,
            position: cameraPosition,
          }}>
          <CameraRig position={cameraPosition} />
          <mesh>
            <Book open={hasOpenedBook}>
              <BookData onclose={closeBook} />
              {/* OnNext */}
              {/* OnBack */}
              {/* Left page Title */}
              {/* Left page Content */}
              {/* Right page Title */}
              {/* Right page Content */}
            </Book>
          </mesh>
          <ambientLight intensity={0.5} />
          <directionalLight color="white" position={[0, 10, 20]} />
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[25, 23, 5]} />
            <meshStandardMaterial color={"#966F33"} />
          </mesh>
          <mesh position={[0, 7, 1]}>
            <boxGeometry args={[20, 5, 5]} />
            <meshStandardMaterial color={"orange"} />
          </mesh>
          <mesh position={[0, 0, 1]}
          >
            <boxGeometry args={[20, 5, 5]} />
            <meshStandardMaterial color={"orange"} />
          </mesh>
          <mesh position={[0, -7, 1]}>
            <boxGeometry args={[20, 5, 5]} />
            <meshStandardMaterial color={"orange"} />
          </mesh>
          <mesh position={[6, 7, 3.5]} className={"Diploma"}>
            <planeGeometry args={[8, 5, 1, 1]} />
            <meshStandardMaterial map={highSchoolDiploma} side={FrontSide} />
          </mesh>
          <mesh position={[-6, 7, 3.5]} className={"Bachelors"}>
            <planeGeometry args={[8, 5, 1, 1]} />
            <meshStandardMaterial map={Bachelors} side={FrontSide} />
          </mesh>
          <mesh position={[-8, 0, 3.5]} className={"Projects"} onClick={openBook}>
            <boxGeometry args={[2, 5, 1]} />
            <meshStandardMaterial color={"0x44aa88"} attach="material-0" />
            <meshStandardMaterial color={"gray"} attach="material-1" />
            <meshStandardMaterial color={"green"} attach="material-2" />
            <meshStandardMaterial color={"yellow"} attach="material-3" />
            <meshStandardMaterial color={"blue"} attach="material-4" />
            <meshStandardMaterial color={"black"} attach="material-5" />
          </mesh>
          <mesh position={[-5, 0, 3.5]} className={"Languages"} onClick={openBook}>
            <boxGeometry args={[2, 5, 1]} />
            <meshStandardMaterial color={"0x44aa88"} attach="material-0" />
            <meshStandardMaterial color={"gray"} attach="material-1" />
            <meshStandardMaterial color={"green"} attach="material-2" />
            <meshStandardMaterial color={"yellow"} attach="material-3" />
            <meshStandardMaterial color={"yellow"} attach="material-4" />
            <meshStandardMaterial color={"blue"} attach="material-5" />
          </mesh>
          {/* <OrbitControls></OrbitControls> */}
        </Canvas>
      </div>
    </>
  );
}
