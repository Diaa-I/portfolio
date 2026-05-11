import { useFBX, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function ThreeDimensionalModel({ url, position, rotation, scale, fbx=false, name="" }) {
  let model
  if(fbx) 
    model = useFBX(url)
  else
    model = useGLTF(url);
  return (
    <mesh position={position} rotation={rotation} scale={scale} name={name}>
      <primitive object={fbx?model:model.scene.clone()} name={name}  />
    </mesh>
  );
}
