import { Center } from '@react-three/drei'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { DefaultLights } from '@/components/canvas/DefaultLights'

export const GeometryScene = () => (
  <>
    <Grid />
    <DefaultCamera />
    <DefaultControls autoRotate />
    <DefaultLights />
    <Center top>
      <group scale={2}></group>
    </Center>
  </>
)
