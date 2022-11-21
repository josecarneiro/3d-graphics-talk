import { OverlayPage } from '@/components/dom/OverlayPage'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { RotationControls } from '@/components/canvas/RotationControls'
import { Center } from '@react-three/drei'
import { EdgeMaterial, GlossyMaterial } from '@/components/canvas/materials'
import {
  GenericObjectShowcaseProps,
  GenericObjectShowcase,
} from '@/components/canvas/GenericObjectShowcaseProps'

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
    <mesh
    // rotation={[-Math.PI / 2, 0, 0]}
    >
      {/* <planeGeometry args={[1, 1, 1]} /> */}
      <coneGeometry args={[0.5, 1, 3]} />
      {children}
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
      <group scale={1.5}>
        <MaterialShowcase label='Basic'>
          <meshBasicMaterial color={MESH_COLOR} />
        </MaterialShowcase>
        <MaterialShowcase label='Lambert' position={[2, 0, 0]}>
          <ambientLight color='black' />
          <meshLambertMaterial color={MESH_COLOR} />
        </MaterialShowcase>
        <MaterialShowcase label='Phong' position={[4, 0, 0]}>
          {/* <GlossyMaterial color={MESH_COLOR} /> */}
          <meshPhongMaterial color={MESH_COLOR} />
        </MaterialShowcase>
        <MaterialShowcase label='Physical' position={[6, 0, 0]}>
          <GlossyMaterial color={MESH_COLOR} />
        </MaterialShowcase>
        <MaterialShowcase label='Normal' position={[8, 0, 0]}>
          <meshNormalMaterial />
        </MaterialShowcase>
        <MaterialShowcase label='Depth' position={[0, 0, 3]}>
          <meshDepthMaterial />
        </MaterialShowcase>
        <MaterialShowcase label='Standard' position={[2, 0, 3]}>
          <meshStandardMaterial color={MESH_COLOR} />
        </MaterialShowcase>
        <MaterialShowcase label='Toon' position={[4, 0, 3]}>
          <meshToonMaterial color={MESH_COLOR} />
        </MaterialShowcase>
      </group>
    </Center>
  </>
)
