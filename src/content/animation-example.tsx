import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Color, Mesh, MeshPhongMaterial } from 'three'

const color = new Color('blue')

const MovingCube = () => {
  const ref = useRef<Mesh<any, MeshPhongMaterial>>()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const mesh = ref.current
    if (mesh) {
      color.setHSL((t / 5) % 360, 0.8, 0.5)
      mesh.position.x = Math.sin(t * 2) * 4
      mesh.material.color = color
    }
  })
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial />
    </mesh>
  )
}

const App = () => (
  <div style={{ height: '100vh' }}>
    <Canvas camera={{ position: [3, 3, 3], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[20, 30, 10]} />
      <pointLight position={[-10, -10, -10]} color='blue' />
      <MovingCube />
    </Canvas>
  </div>
)

export default App
