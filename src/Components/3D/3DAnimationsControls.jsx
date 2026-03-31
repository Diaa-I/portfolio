import { useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Vector3 } from "three";
import { DEG2RAD } from "three/src/math/MathUtils.js";
import {
  DirectionalLight,
  DirectionalLightHelper,
  Euler,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PlaneGeometry,
  Quaternion,
} from "three/src/Three.Core.js";

const controls = forwardRef(
  ({ setIsOnComputer, setResultText, isOnComputer }, ref) => {
    const { raycaster, scene, camera, mouse } = useThree();
    const [toMove, setToMove] = useState(false);
    const [movePosition, setMovePosition] = useState();
    const [cameraRotation, setCameraRotation] = useState();
    const [mouseClicked, setMouseClicked] = useState(false);

    const cameraRotationArr = {
      // Left Wall Stuff
      A: [0, 2 * DEG2RAD, 0],
      // Right wall Stuff
      // B: [0, -130 * DEG2RAD, 0],
      // B: [0, -Math.PI / 1.4, 0],
      B: [0, -92 * DEG2RAD, 0],
      // back from Left Wall Stuff
      CA: [0, -45 * DEG2RAD, 0],
      // back from Right Wall Stuff
      // CB: [0, -10 * DEG2RAD, 0],
    };
    const currentPoint = useRef("A");
    useFrame((state) => {
      // if the camera is supposed to move
      if (toMove) {
        // Get the distance of the camera from the end poistion which the position of what was clicked
        let distance = Math.round(camera.position.distanceTo(movePosition));
        console.log(distance);
        // Stop the animation if the distance is less than 0.1
        if (distance < 0.001) {
          setToMove(false);
          setMovePosition();
          setCameraRotation();
          setMouseClicked(false);
        } else {
          // Keep moving towards if distance is not less than 0.1
          camera.position.lerp(movePosition, 0.03);
          console.log(cameraRotation);
          if (cameraRotation) {
            state.camera.quaternion.slerp(cameraRotation, 0.03);
            //   camera.rotation.x = MathUtils.lerp(-7.8, cameraRotation.x, 0.02);
            //   camera.rotation.y = MathUtils.lerp(1, cameraRotation.y, 0.02);
            //   camera.rotation.z = MathUtils.lerp(8, cameraRotation.z, 0.02);
          }
        }
        console.log(1);
      }
    });
    //   const handleCanvasClick = ;
    useImperativeHandle(ref, () => ({
      handleCanvasClick: () => {
        // Update the raycaster with the current mouse position
        raycaster.setFromCamera(mouse, camera);

        // Get all intersected objects in the scene
        const intersects = raycaster.intersectObjects(scene.children, true);

        if (intersects.length > 0) {
          const topTarget = intersects[0].object;

          console.log("Hit target:", topTarget.name || topTarget.uuid);
          // Needs to be in animations or useFrame the movement the lerp, two states one telling it moving = true, where to move []
          //   Allow only one movement at a time, so the user cannot swap places until they reach the end of the animation
          if (!mouseClicked) {
            // If the computer was clicked then the user clicked away, the keydown listener wont register the keys on the screen
            if (isOnComputer && topTarget.name != "computer") {
              setIsOnComputer(false);
              setResultText("Program Exited!");
            }
            // Check what target was clicked and then go to that location and rotate camera
            if (
              topTarget.name == "gdsc" ||
              topTarget.name == "bachelors" ||
              topTarget.name == "thm"
            ) {
              let pos = new Vector3(
                topTarget.position.x,
                topTarget.position.y,
                topTarget.position.z + 1.6,
              );
              currentPoint.current = "A";
              let rot = new Quaternion().setFromEuler(
                new Euler(...cameraRotationArr[currentPoint.current]),
              );
              setCameraRotation(rot);
              setMovePosition(pos);
              setToMove(true);
              setMouseClicked(true);
            } else if (
              topTarget.name == "video" ||
              topTarget.name == "video_subtitle" ||
              topTarget.name == "computer"
            ) {
              let pos;
              if (topTarget.name == "video_subtitle") {
                pos = new Vector3(4.75 - 4.2, 3.02, -0.1);
              } else {
                pos = new Vector3(
                  topTarget.position.x - 4.2,
                  topTarget.position.y,
                  topTarget.position.z,
                );
              }
              currentPoint.current = "B";
              let rot = new Quaternion().setFromEuler(
                new Euler(...cameraRotationArr[currentPoint.current]),
              );
              setCameraRotation(rot);
              setMovePosition(pos);
              setToMove(true);
              setResultText("Waiting for your input");
              setMouseClicked(true);
            } else if (topTarget.name == "triangle") {
              let pos = new Vector3(
                topTarget.position.x,
                topTarget.position.y,
                topTarget.position.z + 2,
              );
              currentPoint.current = "A";
              let rot = new Quaternion().setFromEuler(
                new Euler(...cameraRotationArr[currentPoint.current]),
              );
              setCameraRotation(rot);
              setMovePosition(pos);
              setToMove(true);
              setMouseClicked(true);
            } else {
              // Back to basic
              let rot;
              rot = new Quaternion().setFromEuler(
                new Euler(...cameraRotationArr["CA"]),
              );

              let pos = new Vector3(-7.8, 0.5, 8);
              setCameraRotation(rot);
              setMovePosition(pos);
              setToMove(true);
              setMouseClicked(true);
            }
          }
        }
      },
    }));
    const [targetObject] = useState(() => new Object3D());
    const directionalLightRef = useRef(DirectionalLight);
    useLayoutEffect(() => {
      // Set the target object's position (e.g., the center of the scene)
      targetObject.position.set(0.15, 1, -0);
      // The directional light will now look at this position
      if (directionalLightRef.current) {
        directionalLightRef.current.target = targetObject;
      }
    }, [targetObject]);

    // useHelper(directionalLightRef, DirectionalLightHelper, 0.1, "blue");
    return (
      <>
        <ambientLight
          ref={directionalLightRef}
          position={[-0.4, 5, 1.7]}
          color={"#ddd0be"}
          intensity={3}
        />
      </>
    );
  },
);
export default controls;
