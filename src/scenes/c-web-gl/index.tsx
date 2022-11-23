import { Center } from '@react-three/drei'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultLights } from '@/components/canvas/DefaultLights'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { useState } from 'react'
import { CodeExample } from '@/components/canvas/CodeExample'
import { Model } from '../../components/canvas/Model'
import { TRUCK_MODEL_GLTF } from '@/constants/paths'
import { OldGoblinModel } from '@/components/canvas/models/OldGoblinModel'
import { GenericObjectShowcase } from '@/components/canvas/GenericObjectShowcaseProps'

export const WebGlScene = ({ content }) => {
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
      <DefaultControls autoRotate enableZoom={!showCodeExample} angle={Math.PI / 2.5} />
      <DefaultLights />
      <Center top>
        <GenericObjectShowcase label={!showCodeExample ? 'WebGL' : undefined} scale={1.5}>
          <OldGoblinModel onClick={displayCodeExample} scale={5} rotation={[0, Math.PI / 2, 0]} />
        </GenericObjectShowcase>
      </Center>
    </>
  )
}
