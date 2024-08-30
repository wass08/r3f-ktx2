import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { KTX2Loader } from "three/examples/jsm/Addons.js";

import { degToRad } from "three/src/math/MathUtils.js";
import { Floor } from "./Floor";

const models = [
  "free_porsche_911_carrera_4s",
  "free_1975_porsche_911_930_turbo",
  "free_1975_porsche_911_930_turbo_ktx2_optimized",
];
export const Experience = () => {
  const { model } = useControls("Model", {
    model: {
      value: models[0],
      options: models,
    },
  });
  const gl = useThree((state) => state.gl);
  const { scene } = useGLTF(
    `models/${model}.glb`,
    undefined,
    undefined,
    (loader) => {
      const ktx2loader = new KTX2Loader();
      ktx2loader.setTranscoderPath(
        "https://cdn.jsdelivr.net/gh/pmndrs/drei-assets/basis/"
      );
      ktx2loader.detectSupport(gl);
      loader.setKTX2Loader(ktx2loader);
    }
  );
  return (
    <>
      <OrbitControls
        autoRotate
        maxPolarAngle={degToRad(80)}
        minPolarAngle={degToRad(30)}
      />
      {/* LIGHTS */}
      <Environment preset="sunset" />
      <directionalLight position={[-5, 3, 5]} intensity={50} />
      <ambientLight intensity={4} />

      {/* STAGE */}
      <group>
        <primitive object={scene} />
      </group>
      <Floor />
    </>
  );
};
