import { Canvas } from '@react-three/fiber'

const App = () => (
  <div style={{ width: 600, height: 600 }}>
    <Canvas camera={{ position: [2, 2, 2] }}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        {/*
        <sphereGeometry args={[0.75, 12, 8]} />
        <coneGeometry args={[0.5, 1, 5]} />
        <icosahedronGeometry args={[0.5, 0]} />
        <planeGeometry args={[1, 1]} />
        <torusKnotGeometry args={[0.55, 0.125, 50, 10]} />
        */}
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  </div>
)

export default App
