import { Center } from '@react-three/drei'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultLights } from '@/components/canvas/DefaultLights'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { useState } from 'react'
import { CodeExample } from '@/components/canvas/CodeExample'
import { OldGoblinModel } from '@/components/canvas/models/OldGoblinModel'
import { GenericObjectShowcase } from '@/components/canvas/GenericObjectShowcaseProps'
import { useKeyPress } from 'ahooks'

export const WebGlScene = ({ content }) => {
  const [showCodeExample, setShowCodeExample] = useState(false)
  const displayCodeExample = () => setShowCodeExample(true)
  useKeyPress(['ctrl.enter'], () => displayCodeExample())
  return (
    <>
      {showCodeExample && <CodeExample content={content} template='vanilla-ts' />}
      <Grid />
      <DefaultCamera />
      <DefaultControls autoRotate enableZoom={!showCodeExample} angle={Math.PI / 2.5} />
      <DefaultLights />
      <Center top>
        <GenericObjectShowcase
          onClick={displayCodeExample}
          label={!showCodeExample ? 'WebGL' : undefined}
          scale={1.5}>
          <OldGoblinModel onClick={displayCodeExample} scale={5} rotation={[0, Math.PI / 2, 0]} />
        </GenericObjectShowcase>
      </Center>
    </>
  )
}
