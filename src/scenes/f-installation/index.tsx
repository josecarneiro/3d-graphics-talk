import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultLights } from '@/components/canvas/DefaultLights'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { TerminalExample } from '@/components/canvas/TerminalExample'

// const INSTALLATION_COMMAND = 'yarn add three @types/three @react-three/fiber';
const INSTALLATION_COMMAND =
  'yarn add three @types/three @react-three/fiber @react-three/drei @react-three/rapier'
export const InstallationScene = () => (
  <>
    <TerminalExample command={INSTALLATION_COMMAND} />
    <Grid />
    <DefaultCamera />
    <DefaultControls autoRotate />
    <DefaultLights />
  </>
)
