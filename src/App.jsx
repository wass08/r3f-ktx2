import { useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  const { active } = useProgress();
  return (
    <>
      <div className={`spinner ${!active && "spinner--hidden"}`}>
        <img src="spinner.svg" />
      </div>
      <Canvas shadows camera={{ position: [3, 2, 8], fov: 40 }}>
        <color attach="background" args={["#333355"]} />
        <fog attach="fog" args={["#333355", 10, 20]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
