import { OverlayPage } from '@/components/dom/OverlayPage'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { RotationControls } from '@/components/canvas/RotationControls'
import { Center, OrbitControls } from '@react-three/drei'
import {
  GenericObjectShowcaseProps,
  GenericObjectShowcase,
} from '@/components/canvas/GenericObjectShowcaseProps'
import { FlowingShaderMaterial } from '@/components/canvas/materials/FlowingShaderMaterial'
import { Rotate } from '@/components/canvas/Rotate'
import { MeshProps } from '@react-three/fiber'
import { ReactScene } from '@/scenes/react'
import { MonstersScene } from '@/scenes/monsters'

const Page = (props) => (
  <>
    <OverlayPage />
    <h1>Material</h1>
  </>
)

export default Page

const MESH_COLOR = 'blue'

const MaterialShowcase = ({ children, ...props }: GenericObjectShowcaseProps) => (
  <GenericObjectShowcase {...props}>
    <Rotate>
      <mesh>
        <icosahedronGeometry args={[0.5, 0]} />
        {children}
      </mesh>
    </Rotate>
  </GenericObjectShowcase>
)

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
    {/* <Grid /> */}
    <DefaultCamera />
    <RotationControls autoRotate />
    {/* <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <spotLight position={[50, 40, 40]} castShadow />
    <spotLight position={[-50, 40, -40]} castShadow />
    <pointLight position={[-10, -10, -10]} /> */}
    {/* <color attach='background' args={['black']} /> */}
    {/* <Center> */}
    {/* <WorldContent /> */}
    {/* </Center> */}
    {/* <ReactScene /> */}
    {/* <OrbitControls
      autoRotate
      autoRotateSpeed={0.15}
      minPolarAngle={Math.PI / 1.625}
      maxPolarAngle={Math.PI / 1.625}
    /> */}
    <MonstersScene />
  </>
)
