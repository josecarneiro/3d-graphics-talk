import { OverlayPage } from '@/components/dom/OverlayPage'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { Center } from '@react-three/drei'
import {
  GenericObjectShowcaseProps,
  GenericObjectShowcase,
} from '@/components/canvas/GenericObjectShowcaseProps'
import { FlowingShaderMaterial } from '@/components/canvas/materials/FlowingShaderMaterial'
import { Rotate } from '@/components/canvas/Rotate'
import { MeshProps } from '@react-three/fiber'

const Page = (props) => (
  <>
    <OverlayPage />
    <h1>Material</h1>
  </>
)

export default Page

type BlockProps = MeshProps & {
  color?: string
}

const Block = ({ color, ...props }: BlockProps) => (
  <mesh {...props}>
    <boxGeometry args={[1, 1, 1]} />
    <meshLambertMaterial color={color} />
  </mesh>
)

const COLORS = {
  GREEN: 'green',
  YELLOW: 'yellow',
  RED: 'red',
  BLUE: 'blue',
  ORANGE: 'orange',
  PURPLE: 'purple',
}

const WorldContent = () => (
  <>
    <Block color={COLORS.GREEN} />
    <Block position={[1, 1, 1]} color={COLORS.GREEN} />
    <Block position={[1, 2, 1]} color={COLORS.GREEN} />
    <Block position={[2, 2, 1]} color={COLORS.GREEN} />
  </>
)

Page.canvas = (props) => (
  <>
    <Grid />
    <DefaultCamera />
    <DefaultControls autoRotate />
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <spotLight position={[50, 40, 40]} castShadow />
    <spotLight position={[-50, 40, -40]} castShadow />
    <pointLight position={[-10, -10, -10]} />
    <Center>
      <WorldContent />
    </Center>
  </>
)
