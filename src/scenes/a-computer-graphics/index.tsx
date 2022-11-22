import { Center } from '@react-three/drei'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultLights } from '@/components/canvas/DefaultLights'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { useState } from 'react'
import { CodeExample } from '@/components/canvas/CodeExample'
import { Model } from '../../components/canvas/Model'

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

const TruckModel = (props) => (
  <Model
    url='https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/ice-cream-truck/model.gltf'
    {...props}
  />
)

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
      <DefaultControls autoRotate />
      <DefaultLights />
      <Center top>
        <TruckModel onClick={displayCodeExample} scale={2} />
      </Center>
    </>
  )
}
