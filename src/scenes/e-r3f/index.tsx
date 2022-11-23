import { Center } from '@react-three/drei'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultLights } from '@/components/canvas/DefaultLights'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { useState } from 'react'
import { CodeExample } from '@/components/canvas/CodeExample'
import { GenericObjectShowcase } from '@/components/canvas/GenericObjectShowcaseProps'
import { WolfModel } from '@/components/canvas/models/WolfModel'

export const R3fScene = ({ content }) => {
  const [showCodeExample, setShowCodeExample] = useState(false)
  const displayCodeExample = () => {
    setShowCodeExample(!showCodeExample)
  }
  // const hideCodeExample = () => {
  //   setShowCodeExample(false)
  // }
  return (
    <>
      {showCodeExample && <CodeExample content={content} />}
      <Grid />
      <DefaultCamera />
      <DefaultControls autoRotate enableZoom={!showCodeExample} angle={Math.PI / 2.5} />
      <DefaultLights />
      <Center top>
        <GenericObjectShowcase label={!showCodeExample ? '@react-three/fiber' : undefined}>
          <WolfModel onClick={displayCodeExample} scale={5} rotation={[0, Math.PI / 2, 0]} />
        </GenericObjectShowcase>
      </Center>
    </>
  )
}
