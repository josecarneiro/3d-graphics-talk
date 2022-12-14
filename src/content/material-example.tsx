import { Canvas } from '@react-three/fiber'

const App = () => (
  <div style={{ width: 600, height: 600 }}>
    <Canvas camera={{ position: [2, 2, 2] }}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color='blue' />
        {/*
        <meshBasicMaterial color='blue' />
        <meshLambertMaterial color='blue' />
        <meshPhongMaterial color='blue' />
        <meshNormalMaterial />
        <meshDepthMaterial />
        <meshStandardMaterial color='blue' />
        <meshToonMaterial color='blue' />
        */}
      </mesh>
      <pointLight position={[20, 10, 15]} />
      <pointLight position={[10, 10, 20]} color='red' />
    </Canvas>
  </div>
)

export default App
