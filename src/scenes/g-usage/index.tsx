import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultLights } from '@/components/canvas/DefaultLights'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { CodeExample } from '@/components/canvas/CodeExample'

export const UsageScene = ({ content }) => (
  <>
    <CodeExample content={content} />
    <Grid />
    <DefaultCamera />
    <DefaultControls autoRotate />
    <DefaultLights />
  </>
)
