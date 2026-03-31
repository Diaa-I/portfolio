import React, { useEffect, useRef, useState } from "react";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import {
  Box,
  CameraControls,
  Environment,
  Helper,
  OrbitControls,
  PerspectiveCamera,
  Text,
  useGLTF,
  useTexture,
  useHelper,
} from "@react-three/drei";

import PentesterTHM from "../../assets/Pentester.png";
import Bachelors from "../../assets/download.png";
import Lead from "../../assets/Diaa_nasr_lead.jpg";
import {
  CameraHelper,
  DirectionalLightHelper,
  DoubleSide,
  TextureLoader,
} from "three";
import { TextGeometry } from "three/examples/jsm/Addons.js";
import ThreeDimensionalVideos from "./3DVideos.jsx";
import { DEG2RAD } from "three/src/math/MathUtils.js";
import ThreeDimensionalControls from "./3DAnimationsControls.jsx";
import ThreeDimensionalModel from "./3DModel.jsx";
import Modal from "../Projects/ProjectModal.jsx";
extend({ TextGeometry });

export default function ThreeDimensional() {
  const [inputText, setInputText] = useState(
    "Enter one of the following commands to see something: 'Frameworks', 'Languages', 'Projects', or 'Databases'.\nPress Enter after inputting the command of your choice\nPress any key to start",
  );
  const topTitleJob = useRef("Backend Developer Trainee");
  const topDescriptionJob = useRef(
    "• Developed RESTful APIs for e-commerce platforms and a notification microservice using RabbitMQ.\n• Performed automated API testing with PestPHP.\n\n Apr 2025 - Jul 2025",
  );
  const midTitleJob = useRef("Software Developer Intern");
  const midDescriptionJob = useRef(
    "• Developed and demoed software that optimizes a workflow, reducing task completion time by 91% and eliminating human error.\n\n Jun 2023 - Jul 2023",
  );
  const bottomTitleJob = useRef("Full-Stack Developer");
  const bottomDescriptionJob = useRef(
    "• Developed a website that imports Excel files into a database and enables data management and manipulation through a web interface.\n• Built a website to handle 100,000+ records, featuring mass mailing, dynamic filtering, and data import/export for centralized database management.\n\n Nov 2022 - Sep 2023",
  );
  const [videoSrcCounter, setVideoSrcCounter] = useState(0);
  const videoSrcs = [
    "src/assets/This is the demo.mp4",
    "src/assets/LibraryProject.mp4",
    "src/assets/GameDemo.mp4",
  ];
  const videoSubtitleArray = [
  "A team of 3 members, we developed an image anontation tool that helps reduce the time needed to annotate images and videos, I was responsible of the developement of the website and database and the connection between the backend and the AI module, we used YoloV8, Flask, MongoDB, and React.",
  "I Developed the website, and developed the authentication system from scratch using json tokens and refresh tokens to keep the user logged in, I used NodeJS, React, ThreeJS, PostgresSQL. I am currently working on this project.",
  "I was part of a team of 2 developers, we worked on the game which had two levels, the level you are watching is the level I developed, we used Unity, C#.",
];
  const controlsRef = useRef();
  const [isOnComputer, setIsOnComputer] = useState(false);
  const [firstTimeInput, setFirstTimeInput] = useState(true);
  const [resultText, setResultText] = useState("Waiting for input");
  const PentesterTHMImg = useLoader(TextureLoader, PentesterTHM);
  const BachelorsImg = useLoader(TextureLoader, Bachelors);
  const LeadImg = useLoader(TextureLoader, Lead);
  const [wallColorMap, wallRoughnessMap, wallNormalMap] = useLoader(
    TextureLoader,
    [
      "src/assets/020_basecolor_2048.png",
      "src/assets/020_smoothness_2048.png",
      "src/assets/020_normal_2048.png",
    ],
  );
  const [floorColorMap, floorRoughnessMap, floorNormalMap] = useLoader(
    TextureLoader,
    [
      "src/assets/028_basecolor_2k.png",
      "src/assets/028_smoothness_2k.png",
      "src/assets/028_normal_2k.png",
    ],
  );
  const [wall2ColorMap, wall2RoughnessMap, wall2NormalMap] = useLoader(
    TextureLoader,
    [
      "src/assets/T_WornRock_D.png",
      "src/assets/T_WornRock_N.png",
      "src/assets/T_WornRock_R.png",
    ],
  );
  useEffect(() => {
    const handleKeyDown = (e) => {
      
      if (isOnComputer) {
        if (firstTimeInput) {
          if (e.which >= 65 && e.which <= 90) {
            setInputText(() => e.key);
          } else {
            setInputText(() => "");
          }
          setFirstTimeInput(false);
        } else {
          if (e.key == "Backspace") {
            if (inputText.length > 0) setInputText((prev) => prev.slice(0, -1));
          } else if (e.key == " ") {
            setInputText((prev) => prev + e.key);
          } else if (e.key == "Enter") {
            console.log("Getting data from back");
            switch (inputText.toLowerCase().trim()) {
              case "help":
                setResultText(
                  "Enter one of the following commands to see something: 'Languages', 'Frameworks', 'Projects', or 'Databases', to exit the computer enter: 'quit', 'q', 'exit'",
                );
                break;
              case "languages":
              case "language":
                setResultText(
                  "Languages:\n• JavaScript\n• Python\n• C++\n• PHP",
                );
                break;
              case "projects":
              case "project":
                setResultText(
                  "Projects:\nOn the screen:\n• D.O.R.A\n• My-Home-Library\n• The Unexpected\nProjects avaliable that can be viewed on the static page, but not here: \n• HRFhome\n• SMNfood\n• Portfolio\n• Confidential\n• Trash Classifer",
                );
                break;
              case "frameworks":
              case "framework":
                setResultText(
                  "Tools & Frameworks:\n• Three.Js\n• Express.js\n• React\n• Laravel\n• Flask\n• NodeJS\n• PestPHP",
                );
                break;
              case "databases":
              case "database":
                setResultText("Databases:\n• MySQL\n• PostgreSQL\n• MongoDB");
                break;
              case "quit":
              case "exit":
              case "q":
                setIsOnComputer(false);
                setResultText("Program Exited!");
                break;
              default:
                setResultText(
                  "Invalid Input! Type 'help' command to know more, to exit the computer enter: 'quit', 'q', 'exit' ",
                );
                break;
            }
          }
          // 65 - 90 for alphabets we can use allow those only
          else if (e.which >= 65 && e.which <= 90) {
            setInputText((prev) => prev + e.key);
          }
        }
      } else {
        if (e.key.toLocaleLowerCase() == "arrowright") {
          if (!(videoSrcs.length - 2 < videoSrcCounter)) {
            setVideoSrcCounter((index) => index + 1);
          }
        } else if (e.key.toLocaleLowerCase() == "arrowleft") {
          if (!(videoSrcCounter - 1 < 0)) {
            setVideoSrcCounter((index) => index - 1);
          }
        }
        // if (oldIndex != videoSrcCounter) {
        //   console.log(videoSrcs[videoSrcCounter]);
        //   // video.src = videoSrcs[videoSrcCounter];
        //   // SubtitleText.text = videoSubtitleArray[videoSrcIndex];
        //   // Not needed
        //   // videoMaterial.needsUpdate = true;
        //   // videoTexture.needsUpdate = true;
        //   // video.load();
        //   // video.play();
        // }
      }
  
    };
    // const handleOnClick = (e) => {
    //   console.log(e);
    // };
    // window.addEventListener("mousedown", handleOnClick);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      // window.removeEventListener("onclick", handleOnClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleComputerScreenClick = (e) => {
    setIsOnComputer(true);
  };
  


  return (
    <div style={{ width: "100vw", height: "90vh" }}>
      <Canvas
        tabIndex={-1}
        onClick={() => controlsRef.current.handleCanvasClick()}
      >
        <ThreeDimensionalControls
          ref={controlsRef}
          setIsOnComputer={setIsOnComputer}
          setResultText={setResultText}
          isOnComputer={isOnComputer}
        />
        <Environment preset="city" />
        {/* <Environment files="src/assets/kloofendal_48d_partly_cloudy_puresky_2k.hdr" background /> */}
        {/* <Environment files="src/assets/studio_small_09_2k.hdr" background  /> */}
        {/* <Environment files="src/assets/fireplace_2k.hdr" background  /> */}
        {/* <ambientLight intensity={50} color={"green"}></ambientLight> */}
        {/* <directionalLight
          position={[10, 1, 20]}
          color={"green"}
          intensity={10}
          // rotation={[0, -45 * DEG2RAD, 0]}
        /> */}
        <ThreeDimensionalModel
          url={
            "src/assets/3D_assets/decorative_picture_frame_ukkpdhqbw_low.glb"
          }
          position={[-3.4, 2.7, -4.8]}
          rotation={[0, 0, 90 * DEG2RAD]}
          scale={[2, 2.5, 1]}
        />
        <ThreeDimensionalModel
          url={
            "src/assets/3D_assets/decorative_picture_frame_ukkpdhqbw_low.glb"
          }
          position={[-0.1, 2.7, -4.8]}
          rotation={[0, 0, 90 * DEG2RAD]}
          scale={[2, 2.5, 1]}
        />
        <ThreeDimensionalModel
          url={
            "src/assets/3D_assets/decorative_picture_frame_ukkpdhqbw_low.glb"
          }
          position={[3, 2.7, -4.8]}
          rotation={[0, 0, 90 * DEG2RAD]}
          scale={[2, 2.5, 1]}
        />
        <ThreeDimensionalModel
          url={"src/assets/3D_assets/tv_low_poly.glb"}
          
          position={[5.0, 1.4, -0.01]}
          rotation={[0, -87.5 * DEG2RAD, 0]}
          scale={[2.7, 2.8, 1]}
        />
        <ThreeDimensionalModel
          url={"src/assets/3D_assets/pc.fbx"}
          fbx={true}
          name="computer"
          position={[4, -3.6, 1]}
          rotation={[0, 90 * DEG2RAD, 0]}
          scale={[0.01, 0.01, 0.01]}
        />
        {/* <OrbitControls></OrbitControls> */}
        {/* <CameraControls ref={controlsRef} /> */}
        {/* <OrbitControls></OrbitControls> */}
        <PerspectiveCamera
          makeDefault
          position={[-7.8, 0.5, 8]}
          rotation={[0, -45 * DEG2RAD, 0]}
        >
          {/* <Helper type={CameraHelper}></Helper> */}
        </PerspectiveCamera>
        {/* <color attach="background" args={["#213C51"]} /> */}
        {/* Right wall */}
        <mesh
          position={[5.2, 0.96, 0.2]}
          rotation={[0, -(Math.PI * 0.5), 0]}
          name="right_wall"
        >
          <boxGeometry args={[10, 8,0.5]} />
          {/* <meshBasicMaterial color={"#DDAED3"}  /> */}
          <meshStandardMaterial
            map={wall2ColorMap}
            roughnessMap={wall2RoughnessMap}
            normalMap={wall2NormalMap}
          />
        </mesh>
        {/* Left wall */}
        <mesh position={[0.18, 1, -5.2]} name="left_wall">
          <boxGeometry args={[10, 8,0.5]} />
          {/* <meshBasicMaterial color={"#6594B1"} map={wallMaterial} /> */}
          <meshStandardMaterial
            map={wall2ColorMap}
            roughnessMap={wall2RoughnessMap}
            normalMap={wall2NormalMap}
          />
        </mesh>
        {/* Floor */}
        <mesh
          position={[0.3, -3, -0.16]}
          rotation={[-(Math.PI * 0.5), 0, 0]}
          name="floor"
        >
          <planeGeometry args={[10.3, 10.8, 1]} />
          {/* <meshBasicMaterial color={"#EEEEEE"} /> */}
          <meshStandardMaterial
            map={floorColorMap}
            roughnessMap={floorRoughnessMap}
            normalMap={floorNormalMap}
          />
        </mesh>
        {/* Pentester THM Certificate */}
        <mesh position={[-3.4, 2.7, -4.8]} name="thm">
          <planeGeometry args={[2, 1, 1]} />
          <meshBasicMaterial map={PentesterTHMImg} />
        </mesh>
        {/* GDSC Lead Certificate */}
        <mesh position={[-0.1, 2.7, -4.8]} name="gdsc">
          <planeGeometry args={[2, 1, 1]} />
          <meshBasicMaterial map={LeadImg} />
        </mesh>
        {/* Bachelors Certificate */}
        <mesh position={[3, 2.7, -4.8]} name="bachelors">
          <planeGeometry args={[2, 1, 1]} />
          <meshBasicMaterial map={BachelorsImg} />
        </mesh>
        {/* Top step */}
        <mesh position={[2.0, 1, -4.9]} name="triangle">
          <boxGeometry args={[3, 1.5, 0.1]} />
          <meshBasicMaterial color={"yellow"} />
        </mesh>
        <Text
          name="triangle"
          position={[2.0, 1.6, -4.84]} // X, Y, Z coordinates
          anchorX="center" // Center the text horizontally
          anchorY="middle" // Center the text vertically
          fontSize={0.1} // Set the font size in 3D units
          color="black" // Set the text color
          maxWidth={3.8} // Optional: wrap text if it exceeds a certain width
          lineHeight={1} // Optional: set line spacing
        >
          {topTitleJob.current}
        </Text>
        <Text
          name="triangle"
          position={[2.0, 1.1, -4.84]} // X, Y, Z coordinates
          anchorX="center" // Center the text horizontally
          anchorY="middle" // Center the text vertically
          fontSize={0.1} // Set the font size in 3D units
          color="black" // Set the text color
          maxWidth={2.9} // Optional: wrap text if it exceeds a certain width
          lineHeight={1.2} // Optional: set line spacing
        >
          {topDescriptionJob.current}
        </Text>

        {/* Mid step */}
        <mesh position={[-0.5, 0.2, -4.9]} name="triangle">
          <boxGeometry args={[2.5, 1.5, 0.1]} />
          <meshBasicMaterial color={"yellow"} />
        </mesh>
        <Text
          name="triangle"
          position={[-0.5, 0.8, -4.84]} // X, Y, Z coordinates
          anchorX="center" // Center the text horizontally
          anchorY="middle" // Center the text vertically
          fontSize={0.1} // Set the font size in 3D units
          color="black" // Set the text color
          maxWidth={3.8} // Optional: wrap text if it exceeds a certain width
          lineHeight={1} // Optional: set line spacing
        >
          {midTitleJob.current}
        </Text>
        <Text
          name="triangle"
          position={[-0.5, 0.35, -4.84]} // X, Y, Z coordinates
          anchorX="center" // Center the text horizontally
          anchorY="middle" // Center the text vertically
          fontSize={0.1} // Set the font size in 3D units
          color="black" // Set the text color
          maxWidth={2.25} // Optional: wrap text if it exceeds a certain width
          lineHeight={1} // Optional: set line spacing
        >
          {midDescriptionJob.current}
        </Text>

        {/* Bottom step */}
        <mesh position={[-3.0, -0.8, -4.8]} name="triangle">
          <boxGeometry args={[3, 1.5, 0.1]} />
          <meshBasicMaterial color={"yellow"} />
        </mesh>
        <Text
          name="triangle"
          position={[-3, -0.2, -4.74]} // X, Y, Z coordinates
          anchorX="center" // Center the text horizontally
          anchorY="middle" // Center the text vertically
          fontSize={0.1} // Set the font size in 3D units
          color="black" // Set the text color
          maxWidth={1} // Optional: wrap text if it exceeds a certain width
          lineHeight={1} // Optional: set line spacing
        >
          {bottomTitleJob.current}
        </Text>
        <Text
          name="triangle"
          position={[-3, -0.8, -4.74]} // X, Y, Z coordinates
          anchorX="center" // Center the text horizontally
          anchorY="middle" // Center the text vertically
          fontSize={0.1} // Set the font size in 3D units
          color="black" // Set the text color
          maxWidth={2.9} // Optional: wrap text if it exceeds a certain width
          lineHeight={1.1} // Optional: set line spacing
        >
          {bottomDescriptionJob.current}
        </Text>
        {/* Computer Screen */}
        <mesh
          position={[4.6, -0.5, 1]}
          onClick={handleComputerScreenClick}
          rotation={[0, -(Math.PI * 0.5), 0]}
          name="computer"
        >
          <planeGeometry args={[1.9, 1.1]} />
          <meshBasicMaterial color={"black"} />
        </mesh>

        {/* Input Text */}
        <Text
          name="computer"
          position={[4.55, -0.2, 1]} // X, Y, Z coordinates
          anchorX="center" // Center the text horizontally
          anchorY="middle" // Center the text vertically
          fontSize={0.07} // Set the font size in 3D units
          color="green" // Set the text color
          maxWidth={1.7} // Optional: wrap text if it exceeds a certain width
          lineHeight={1} // Optional: set line spacing
          rotation={[0, -(Math.PI * 0.5), 0]}
        >
          {inputText}
        </Text>
        {/* Result Text */}
        <Text
          name="computer"
          position={[4.55, -0.55, 1]} // X, Y, Z coordinates
          anchorX="center" // Center the text horizontally
          anchorY="middle" // Center the text vertically
          fontSize={0.055} // Set the font size in 3D units
          color="red" // Set the text color
          maxWidth={1.7} // Optional: wrap text if it exceeds a certain width
          lineHeight={1} // Optional: set line spacing
          rotation={[0, -(Math.PI * 0.5), 0]}
        >
          {resultText}
        </Text>
        {/* Video */}
        <ThreeDimensionalVideos
          videoSrcCounter={videoSrcCounter}
          videoSrcs={videoSrcs}
          videoSubtitleArray={videoSubtitleArray}
        />
      </Canvas>
    </div>
  );
}
