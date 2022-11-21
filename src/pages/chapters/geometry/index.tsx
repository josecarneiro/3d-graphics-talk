import { OverlayPage } from '@/components/dom/OverlayPage'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { RotationControls } from '@/components/canvas/RotationControls'
import { Center } from '@react-three/drei'
import { EdgeMaterial } from '@/components/canvas/materials'
import {
  GenericObjectShowcaseProps,
  GenericObjectShowcase,
} from '@/components/canvas/GenericObjectShowcaseProps'

const Page = (props) => (
  <>
    <OverlayPage />
    <h1>Meshes</h1>
  </>
)

export default Page

const MESH_COLOR = 'blue'

const GeometryShowcase = ({ children, ...props }: GenericObjectShowcaseProps) => (
  <GenericObjectShowcase {...props}>
    <mesh>
      {children}
      <EdgeMaterial color={MESH_COLOR} />
    </mesh>
  </GenericObjectShowcase>
)

Page.canvas = (props) => (
  <>
    <Grid />
    <DefaultCamera />
    <RotationControls autoRotate />
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <spotLight position={[50, 40, 40]} castShadow />
    <spotLight position={[-50, 40, -40]} castShadow />
    <pointLight position={[-10, -10, -10]} />
    <Center>
      <group scale={2}>
        <GeometryShowcase label='Box'>
          <boxGeometry args={[1, 1, 1]} />
        </GeometryShowcase>
        <GeometryShowcase label='Sphere' position={[2, 0, 0]}>
          <sphereGeometry args={[0.75, 12, 8]} />
        </GeometryShowcase>
        <GeometryShowcase label='Cone' position={[4, 0, 0]}>
          <coneGeometry args={[0.5, 1, 5]} />
        </GeometryShowcase>
        <GeometryShowcase label='Torus Knot' position={[6, 0, 0]}>
          <torusKnotGeometry args={[0.55, 0.125, 50, 10]} />
        </GeometryShowcase>
      </group>
    </Center>
  </>
)
