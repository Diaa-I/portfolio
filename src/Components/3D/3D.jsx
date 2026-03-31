import React, { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { Box, OrbitControls, PerspectiveCamera, Text, useTexture } from "@react-three/drei";
import PentesterTHM from "../../assets/Pentester.png";
import Bachelors from "../../assets/download.png";
import Lead from "../../assets/Diaa_nasr_lead.jpg";
import { DoubleSide, TextureLoader } from "three";
import { TextGeometry } from "three/examples/jsm/Addons.js";
import ThreeDimensionalVideos from "./3DVideos.jsx";
extend({ TextGeometry });

export default function ThreeDimensional() {
  const [inputText, setInputText] = useState(
    "Enter one of the following commands to see something: 'Frameworks', 'Languages', 'Projects', or 'Databases'.\nPress Enter after inputting the command of your choice\nPress any key to start"
  );
  const topTitleJob = useRef("Backend Developer Trainee");
  const topDescriptionJob = useRef(
    "• Developed RESTful APIs for e-commerce platforms and a notification microservice using RabbitMQ.\n• Performed automated API testing with PestPHP.\n\n Apr 2025 - Jul 2025"
  );
  const midTitleJob = useRef("Software Developer Intern");
  const midDescriptionJob = useRef(
    "• Developed and demoed software that optimizes a workflow, reducing task completion time by 91% and eliminating human error.\n\n Jun 2023 - Jul 2023"
  );
  const bottomTitleJob = useRef("Full-Stack Developer");
  const bottomDescriptionJob = useRef(
    "• Developed a website that imports Excel files into a database and enables data management and manipulation through a web interface.\n• Built a website to handle 100,000+ records, featuring mass mailing, dynamic filtering, and data import/export for centralized database management.\n\n Nov 2022 - Sep 2023"
  );

  const [videoSrcCounter, setVideoSrcCounter] = useState(0);
  const videoSrcs = [
    "src/assets/GameDemo.mp4",
    "src/assets/LibraryProject.mp4",
    "src/assets/This is the demo.mp4",
  ];
  const [isOnComputer, setIsOnComputer] = useState(false);
  const [firstTimeInput, setFirstTimeInput] = useState(true);
  const [resultText, setResultText] = useState("Waiting for input");
  const PentesterTHMImg = useLoader(TextureLoader, PentesterTHM);
  const BachelorsImg = useLoader(TextureLoader, Bachelors);
  const LeadImg = useLoader(TextureLoader, Lead);
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
                  "Enter one of the following commands to see something: 'Languages', 'Frameworks', 'Projects', or 'Databases', to exit the computer enter: 'quit', 'q', 'exit'"
                );
                break;
              case "languages":
              case "language":
                setResultText(
                  "Languages:\n• JavaScript\n• Python\n• C++\n• PHP"
                );
                break;
              case "projects":
              case "project":
                setResultText(
                  "Projects:\nOn the screen:\n• D.O.R.A\n• My-Home-Library\n• The Unexpected\nProjects avaliable that can be viewed on the static page, but not here: \n• HRFhome\n• SMNfood\n• Portfolio\n• Confidential\n• Trash Classifer"
                );
                break;
              case "frameworks":
              case "framework":
                setResultText(
                  "Tools & Frameworks:\n• Three.Js\n• Express.js\n• React\n• Laravel\n• Flask\n• NodeJS\n• PestPHP"
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
                  "Invalid Input! Type 'help' command to know more, to exit the computer enter: 'quit', 'q', 'exit' "
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
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleComputerScreenClick = (e) => {
    setIsOnComputer(true);
  };

  return (
    <div style={{ width: "90vw", height: "90vh" }}>
      <Canvas tabIndex={-1}>
        <OrbitControls></OrbitControls>
        <color attach="background" args={["#ff0000"]} />
        <PerspectiveCamera makeDefault position={[0, 0, 12]} />
        {/* Right wall */}
        <mesh position={[5, 1, 0.2]}>
          <planeGeometry args={[10, 8, 1]} />
          <meshBasicMaterial color={"orange"} />
        </mesh>
        {/* Left wall */}
        <mesh position={[-5, 1, 0.2]}>
          <planeGeometry args={[10, 8, 1]} />
          <meshBasicMaterial color={"yellow"} />
        </mesh>
        {/* Pentester THM Certificate */}
        <mesh position={[-7.4, 2.7, 1]}>
          <planeGeometry args={[2, 1, 1]} />
          <meshBasicMaterial map={PentesterTHMImg} />
        </mesh>
        {/* GDSC Lead Certificate */}
        <mesh position={[-5.15, 2.7, 1]}>
          <planeGeometry args={[2, 1, 1]} />
          <meshBasicMaterial map={LeadImg} />
        </mesh>
        {/* Bachelors Certificate */}
        <mesh position={[-2.8, 2.7, 1]}>
          <planeGeometry args={[2, 1, 1]} />
          <meshBasicMaterial map={BachelorsImg} />
        </mesh>
        {/* Top step */}
        <mesh position={[-2.3, 1, 1]}>
          <boxGeometry args={[3, 1.5, 0.1]} />
          <meshBasicMaterial color={"blue"} />
        </mesh>
        <Text
          position={[-2.3, 1.6, 1.1]} // X, Y, Z coordinates
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
          position={[-2.3, 1.1, 1.1]} // X, Y, Z coordinates
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
        <mesh position={[-5, 0.2, 1]}>
          <boxGeometry args={[2.5, 1.5, 0.1]} />
          <meshBasicMaterial color={"blue"} />
        </mesh>
        <Text
          position={[-5, 0.8, 1.1]} // X, Y, Z coordinates
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
          position={[-5, 0.35, 1.1]} // X, Y, Z coordinates
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
        <mesh position={[-7, -0.8, 1]}>
          <boxGeometry args={[3, 1.5, 0.1]} />
          <meshBasicMaterial color={"blue"} />
        </mesh>
        <Text
          position={[-7, -0.2, 1.1]} // X, Y, Z coordinates
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
          position={[-7, -0.8, 1.05]} // X, Y, Z coordinates
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
        <mesh position={[5, -1, 1]} onClick={handleComputerScreenClick}>
          <planeGeometry args={[4, 3]} />
          <meshBasicMaterial color={"black"} />
        </mesh>
        {/* Input Text */}
        <Text
          position={[5, -0.2, 1]} // X, Y, Z coordinates
          anchorX="center" // Center the text horizontally
          anchorY="middle" // Center the text vertically
          fontSize={0.15} // Set the font size in 3D units
          color="green" // Set the text color
          maxWidth={3.8} // Optional: wrap text if it exceeds a certain width
          lineHeight={1} // Optional: set line spacing
        >
          {inputText}
        </Text>
        {/* Result Text */}
        <Text
          position={[5, -1.3, 1]} // X, Y, Z coordinates
          anchorX="center" // Center the text horizontally
          anchorY="middle" // Center the text vertically
          fontSize={0.15} // Set the font size in 3D units
          color="red" // Set the text color
          maxWidth={3.7} // Optional: wrap text if it exceeds a certain width
          lineHeight={1} // Optional: set line spacing
        >
          {resultText}
        </Text>
        {/* Video */}
        <ThreeDimensionalVideos
          videoSrcCounter={videoSrcCounter}
          videoSrcs={videoSrcs}
        />
      </Canvas>
    </div>
  );
}
