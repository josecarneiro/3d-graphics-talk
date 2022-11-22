import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'

const Scene = ({ children, ...props }) => (
  <Canvas shadows gl={{ preserveDrawingBuffer: true }} {...props}>
    {children}
    <Preload all />
  </Canvas>
)

export default Scene
