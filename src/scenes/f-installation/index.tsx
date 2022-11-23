import { Center } from '@react-three/drei'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultLights } from '@/components/canvas/DefaultLights'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { useState } from 'react'
import { CodeExample } from '@/components/canvas/CodeExample'

export const InstallationScene = () => {
  const [showCodeExample, setShowCodeExample] = useState(false)
  const displayCodeExample = () => {
    setShowCodeExample(!showCodeExample)
  }
  const hideCodeExample = () => {
    setShowCodeExample(false)
  }
  return (
    <>
      {/* {showCodeExample && <CodeExample onClose={hideCodeExample} content={CODE_EXAMPLE_CONTENT} />} */}
      <CodeExample />
      <Grid />
      <DefaultCamera />
      <DefaultControls autoRotate />
      <DefaultLights />
      {/* <Center top>
        <TruckModel onClick={displayCodeExample} scale={2} />
      </Center> */}
    </>
  )
}
