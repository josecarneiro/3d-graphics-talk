import { Center } from '@react-three/drei'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultLights } from '@/components/canvas/DefaultLights'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { useState } from 'react'
import { CodeExample } from '@/components/canvas/CodeExample'
import { YoungGoblinModel } from '@/components/canvas/models/YoungGoblinModel'
import { GenericObjectShowcase } from '@/components/canvas/GenericObjectShowcaseProps'

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
      <DefaultControls autoRotate enableZoom={!showCodeExample} angle={Math.PI / 2.5} />
      <DefaultLights />
      <Center top>
        <GenericObjectShowcase label={!showCodeExample ? 'Three.js' : undefined} scale={1.5}>
          <YoungGoblinModel onClick={displayCodeExample} scale={5} rotation={[0, Math.PI / 2, 0]} />
        </GenericObjectShowcase>
      </Center>
    </>
  )
}
