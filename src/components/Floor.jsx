import { useKTX2 } from "@react-three/drei";

export const Floor = () => {
  const props = useKTX2({
    map: "textures/Marble006_2K-JPG_Color_uastc.ktx2",
    displacementMap: "textures/Marble006_2K-JPG_Displacement_uastc.ktx2",
    normalMap: "textures/Marble006_2K-JPG_NormalGL_uastc.ktx2",
    roughnessMap: "textures/Marble006_2K-JPG_Roughness_uastc.ktx2",
  });

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.84, 0]}
      receiveShadow
    >
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial {...props} />
    </mesh>
  );
};
