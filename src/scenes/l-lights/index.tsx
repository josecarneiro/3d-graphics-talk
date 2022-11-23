import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { CodeExample } from '@/components/canvas/CodeExample'

export const LightsScene = ({ content }) => {
  return (
    <>
      {<CodeExample content={content} />}
      <Grid />
      <DefaultCamera />
      <DefaultControls autoRotate />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <spotLight position={[50, 40, 40]} castShadow />
      <spotLight position={[-50, 40, -40]} castShadow />
      <pointLight position={[-10, -10, -10]} />
    </>
  )
}
