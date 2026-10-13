import ThreeDimensional from "./Components/3D/3D";
import ThreeDimensionalCredits from "./Components/3D/3DCredits";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
export default function ThreeD({}) {
  const controlsRef = useRef();
  const inputRef = useRef(null);
  // Check if the user has the phone to sideways if not inform him that they have to tilt to be sideways to view this content.
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isLandscape) {
    return (
      <div className="flex justify-center items-center text-center w-screen h-screen p-5 box-border">
        <h1 className="max-w-[600px] m-0 text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
          🔄 Please tilt your phone sideways to view this content.
        </h1>
      </div>
    );
  }
  return (
    <>
      <hr></hr>
      <input
        ref={inputRef}
        type="text"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          fontSize: "16px",
          opacity: 0,
          overflow: "hidden",
        }}
      />
      <div className={" w-[100vw] h-[100vh]"} id="3D">
        <Suspense
          fallback={
            <div className="flex justify-center items-center text-center w-screen h-screen p-5 box-border">
              <h1 className="max-w-[600px] m-0 text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Please wait while the content loads.
              </h1>
            </div>
          }
        >
          <Canvas
            dpr={[1, 1.5]}
            className="w-[100vw] h-[100vh]"
            tabIndex={-1}
            onClick={() => controlsRef.current.handleCanvasClick()}
          >
            <ThreeDimensional controlsRef={controlsRef} inputRef={inputRef} />
          </Canvas>
        </Suspense>
      </div>
      <div className={" flex-col  p-2"} id="3D-Credits">
        <ThreeDimensionalCredits />
      </div>
    </>
  );
}
