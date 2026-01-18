import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export default function Book({ open, children }) {
  return (
    <>
      {!open ? null : (
        <>
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[5, 5, 5]} />
          <mesh position={[0, 0, 50]}>
            <boxGeometry args={[25, 23, 5]} />
            <meshStandardMaterial color={"#966F33"} />
          </mesh>
          {open ? children : undefined}
        </>
      )}
    </>
  );
}
