import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const App = () => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <Canvas camera={{ position: [2, 2, 2] }}>
      <mesh position={[-2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshLambertMaterial color='blue' />
      </mesh>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color='blue' />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='blue' />
      </mesh>
      <pointLight position={[20, 10, 15]} />
      <pointLight position={[10, 10, 20]} color='red' />
      <spotLight position={[10, 10, 20]} color='pink' />
      <ambientLight intensity={0.25} />
      <OrbitControls />
    </Canvas>
  </div>
)

export default App
