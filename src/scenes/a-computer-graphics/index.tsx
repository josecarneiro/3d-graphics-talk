import { Center } from '@react-three/drei'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultLights } from '@/components/canvas/DefaultLights'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { useState } from 'react'
import { CodeExample } from '@/components/canvas/CodeExample'
import { Model } from '../../components/canvas/Model'
import { TRUCK_MODEL_GLTF } from '@/constants/paths'

const CODE_EXAMPLE_CONTENT = `
import { Canvas } from '@react-three/fiber'

const App = () => (
  <Canvas camera={{ position: [1, 1, 1] }}>
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </mesh>
  </Canvas>
)

export default App
`

const TruckModel = (props) => <Model url={TRUCK_MODEL_GLTF} {...props} />

export const ComputerGraphicsScene = () => {
  const [showCodeExample, setShowCodeExample] = useState(false)
  const displayCodeExample = () => {
    setShowCodeExample(!showCodeExample)
  }
  const hideCodeExample = () => {
    setShowCodeExample(false)
  }
  return (
    <>
      {showCodeExample && <CodeExample onClose={hideCodeExample} content={CODE_EXAMPLE_CONTENT} />}
      <Grid />
      <DefaultCamera />
      <DefaultControls autoRotate enableZoom={!showCodeExample} />
      <DefaultLights />
      <Center top>
        <TruckModel onClick={displayCodeExample} scale={2} />
      </Center>
    </>
  )
}
