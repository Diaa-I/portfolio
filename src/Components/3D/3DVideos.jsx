import { Text, useTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

export default function ThreeDimensionalVideos({
  videoSrcCounter,
  videoSrcs,
  videoSubtitleArray,
}) {
  const pauseTexture = useTexture("../../assets/pause.jpg");
  const playTexture = useTexture("../../assets/play.jpg");
  const [subtitleText, setSubtitleText] = useState("A team of 3 members, we developed an image anontation tool that helps reduce the time needed to annotate images and videos, I was responsible of the developement of the website and database and the connection between the backend and the AI module, we used YoloV8, Flask, MongoDB, and React.");
  const videoRef = useRef();
  const [oldVideoSrcCounter, setOldVideoSrcCounter] = useState(videoSrcCounter);
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: videoSrcs[videoSrcCounter],
      loop: true,
      muted: true,
      id: Math.floor(Math.random() * (10 - 0) + 0),
    }),
  );
  const [pauseVideo, setPauseVideo] = useState(true);

  useEffect(() => {
    // if video has been changed
    if (oldVideoSrcCounter != videoSrcCounter) {
      // change the video src
      video.src = videoSrcs[videoSrcCounter];
      setSubtitleText(videoSubtitleArray[videoSrcCounter])
      // Set the old counter to the current counter
      setOldVideoSrcCounter(videoSrcCounter);
      // Pause the video
      setPauseVideo(true);
    }
    // Pause and play the video
    if (pauseVideo) video.pause();
    else video.play();
  }, [pauseVideo, videoSrcCounter]);
  return (
    <>
      {/* Video */}
      <mesh
        position={[4.75, 3.02, -0.1]}
        rotation={[0, -(Math.PI * 0.5), 0]}
        name="video"
      >
        <planeGeometry args={[5, 3]} />
        <meshBasicMaterial toneMapped={false}>
          <videoTexture args={[video]} attach="map" ref={videoRef} />
        </meshBasicMaterial>
      </mesh>
      {/* Pause/Play Button */}
      <mesh
        position={[4.8, 1.1, 0]}
        onClick={() => setPauseVideo((prevState) => !prevState)}
        rotation={[0, -(Math.PI * 0.5), 0]}
        name='video_subtitle'
      >
        <meshBasicMaterial
          color={"gray"}
          map={pauseVideo ? playTexture : pauseTexture}
        />
        <boxGeometry args={[0.5, 0.5, 0]}></boxGeometry>
      </mesh>
      <mesh position={[4.8, 2.9, 3.44]} rotation={[0, -(Math.PI * 0.5), 0]} name="video_subtitle" >
        <planeGeometry args={[1.7, 3.5, 1]} />
        <meshBasicMaterial color={"black"} />
      </mesh>
      <Text
        name="video_subtitle"
        position={[4.76, 3.2, 3.44]} // X, Y, Z coordinates
        anchorX="center" // Center the text horizontally
        anchorY="middle" // Center the text vertically
        fontSize={0.15} // Set the font size in 3D units
        color="red" // Set the text color
        maxWidth={1.5} // Optional: wrap text if it exceeds a certain width
        lineHeight={1} // Optional: set line spacing
        rotation={[0, -(Math.PI * 0.5), 0]}
      >
        {subtitleText}
      </Text>
    </>
  );
}
