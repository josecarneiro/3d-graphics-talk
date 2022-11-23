import { Center } from '@react-three/drei'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultLights } from '@/components/canvas/DefaultLights'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { useState } from 'react'
import { CodeExample } from '@/components/canvas/CodeExample'
import { Model } from '../../components/canvas/Model'

const TruckModel = (props) => (
  <Model
    url='https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/ice-cream-truck/model.gltf'
    {...props}
  />
)

export const ThreeScene = ({ content }) => {
  const [showCodeExample, setShowCodeExample] = useState(false)
  const displayCodeExample = () => {
    setShowCodeExample(!showCodeExample)
  }
  const hideCodeExample = () => {
    setShowCodeExample(false)
  }
  return (
    <>
      {showCodeExample && (
        <CodeExample onClose={hideCodeExample} content={content} template='vanilla-ts' />
      )}
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
