import { Canvas } from '@react-three/fiber'

const App = () => (
  <div style={{ width: 600, height: 600 }}>
    <Canvas camera={{ position: [2, 2, 2] }}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color='blue' />
      </mesh>
    </Canvas>
  </div>
)

export default App
