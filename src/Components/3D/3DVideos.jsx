import { useTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

export default function ThreeDimensionalVideos({ videoSrcCounter, videoSrcs }) {
  const pauseTexture = useTexture("src/assets/pause.jpg");
  const playTexture = useTexture("src/assets/play.jpg");

  const videoRef = useRef();
  const [oldVideoSrcCounter, setOldVideoSrcCounter] = useState(videoSrcCounter);
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: videoSrcs[videoSrcCounter],
      loop: true,
      muted: true,
      id: Math.floor(Math.random() * (10 - 0) + 0),
    })
  );
  const [pauseVideo, setPauseVideo] = useState(true);

  useEffect(() => {
    if (oldVideoSrcCounter != videoSrcCounter) {
      video.src = videoSrcs[videoSrcCounter];
      setOldVideoSrcCounter(videoSrcCounter);
      setPauseVideo(true);
    }
    if (pauseVideo) video.pause();
    else video.play();
  }, [pauseVideo, videoSrcCounter]);
  return (
    <>
      <mesh position={[5, 3, 1]}>
        <planeGeometry args={[5, 3]} />
        <meshBasicMaterial toneMapped={false}>
          <videoTexture args={[video]} attach="map" ref={videoRef} />
        </meshBasicMaterial>
      </mesh>
      <mesh
        position={[5, 1.2, 1]}
        onClick={() => setPauseVideo((prevState) => !prevState)}
      >
        <meshBasicMaterial
          color={"white"}
          map={pauseVideo ? playTexture : pauseTexture}
        />
        <boxGeometry args={[0.5, 0.5, 0]}></boxGeometry>
      </mesh>
    </>
  );
}
