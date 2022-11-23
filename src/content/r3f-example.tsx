import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Cube = () => {
  const ref = useRef<any>()
  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
    ref.current.rotation.z += 0.01
  })
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color='red' />
    </mesh>
  )
}

const App = () => (
  <div style={{ width: 600, height: 600 }}>
    <Canvas camera={{ fov: 75, position: [2, 2, 2] }}>
      <Cube />
    </Canvas>
  </div>
)

export default App
