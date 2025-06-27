import { Text } from "@react-three/drei";
import { sRGBEncoding } from "@react-three/drei/helpers/deprecated";
import { useEffect, useRef, useState } from "react";
import ProjectsData from "../../../data/projects.data";

function Video({ position, src, name }) {
  const videoRef = useRef();
  const [video] = useState(() => Object.assign(document.createElement('video'), { src, loop: true, muted: true, id: Math.floor(Math.random() * (10 - 0) + 0) }))
  useEffect(() => {
    video.play();
    // setVideo()
    console.log(videoRef.current);
    if (videoRef.current) {
      videoRef.current.update();
      console.log(videoRef.current.name)
    }
  }, [video, videoRef.current])
  function VideoTextureFn({ args, encoding, attach }) {
    // attach="map" args={[video]} encoding={sRGBEncoding} ref={videoRef}
    return <videoTexture args={[args]} encoding={encoding} ref={videoRef} attach={attach} name={name} controls />
  }
  // console.log(video);
  return (
    // rotation={[0, Math.PI / 2, 0]}
    <mesh position={position} scale={[10, 5, 1]}>
      <planeGeometry />
      <meshBasicMaterial toneMapped={false}>
        {VideoTextureFn({ attach: "map", args: video, encoding: sRGBEncoding })}
      </meshBasicMaterial>
    </mesh>
  )
}
export default function BookData({ onclose }) {
  const [projectIndex, setProjectIndex] = useState(0);
  let leftVideo = ProjectsData[projectIndex]['vidSrc'];
  let rightVideo = ProjectsData[projectIndex + 1]['vidSrc'];
  function moveProjectIndexForward() {
    setProjectIndex((prevProjectIndexState) => (prevProjectIndexState < ProjectsData.length - 2 ? prevProjectIndexState + 1 : prevProjectIndexState))
  }
  function moveProjectIndexBackwards() {
    setProjectIndex((prevProjectIndexState) => (prevProjectIndexState > 0 ? prevProjectIndexState - 1 : 0))
  }
  useEffect(() => {
    leftVideo = ProjectsData[projectIndex]['vidSrc'];
    rightVideo = ProjectsData[projectIndex + 1]['vidSrc'];
  }, [projectIndex])

  return (
    <>
      {/* Close */}
      <mesh position={[15, 7, 61]} onClick={onclose} >
        <Text>X</Text>
        <meshStandardMaterial color={"black"} />
      </mesh>
      {/* the onClick needs to be passed */}
      <mesh position={[15, -7, 61]} onClick={moveProjectIndexForward} >
        <Text>Next</Text>
        <meshStandardMaterial color={"black"} />
      </mesh>
      {/* the onClick needs to be passed */}
      <mesh position={[-15, -7, 61]} onClick={moveProjectIndexBackwards} >
        <Text>Back</Text>
        <meshStandardMaterial color={"black"} />
      </mesh>
      {/* Left Book page */}
      <mesh position={[-7.4, 0, 60]}>
        <boxGeometry args={[15, 15, 1]} />
        <meshStandardMaterial color={"yellow"} />
      </mesh>
      {/* Right Book page */}
      <mesh position={[7.4, 0, 60]}>
        <boxGeometry args={[15, 15, 1]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
      {/* Left Book Page Title Needs to be passed*/}
      <mesh position={[-4, 3.25, 65]}>
        <Text lineHeight={0.1} color={'black'} fontSize={0.8}>{ProjectsData[projectIndex]['title']}</Text>
      </mesh>
      {/* Left Book Page Content Needs to be passed*/}
      {ProjectsData[projectIndex]['vidSrc'] != "" && <Video name={ProjectsData[projectIndex]["title"]} position={[-6.25, 1.5, 62]} src={leftVideo} />}
      {/* <mesh position={[-4, -1.1, 65]}>
        <Text lineHeight={0.2} color={'black'} fontSize={0.2}>Blah Blah Blah</Text>
      </mesh> */}

      {/* <mesh position={[-6.25, 1.5, 62]}>
        <Text lineHeight={0.2} color={'black'} fontSize={0.5}>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah</Text>
      </mesh> */}
      {/* Right Book Page Title Needs to be passed*/}
      <mesh position={[4, 3.25, 65]}>
        <Text lineHeight={0.1} color={'white'} fontSize={0.8}>{ProjectsData[projectIndex + 1]['title']}</Text>
      </mesh>
      {/* Right Book Page Content Needs to be passed*/}
      {ProjectsData[projectIndex + 1]['vidSrc'] != "" && <Video name={ProjectsData[projectIndex + 1]["title"]} position={[6.25, 1.5, 62]} src={rightVideo} />}

    </>
  );
}
