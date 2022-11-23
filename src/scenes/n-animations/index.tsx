import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Color, Mesh, MeshPhongMaterial } from 'three'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { Center, Html } from '@react-three/drei'
// Code Block

// Show right and wrong way to do animations
// state vs. ref

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
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial />
    </mesh>
  )
}

export const AnimationsScene = ({ text }) => (
  <>
    <Html>{text}</Html>
    <Grid />
    <DefaultCamera />
    <DefaultControls autoRotate />
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <spotLight position={[50, 40, 40]} castShadow />
    <spotLight position={[-50, 40, -40]} castShadow />
    <pointLight position={[-10, -10, -10]} />
    <Center top>
      <MovingCube />
    </Center>
  </>
)
