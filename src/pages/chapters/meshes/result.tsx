import { OverlayPage } from '@/components/dom/OverlayPage'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { RotationControls } from '@/components/canvas/RotationControls'
import { Center } from '@react-three/drei'
import { EdgeMaterial, GlossyMaterial, TransparentMaterial } from '@/components/canvas/materials'
import { GenericObjectShowcase } from '@/components/canvas/GenericObjectShowcaseProps'

const Page = (props) => (
  <>
    <OverlayPage />
    <h1>Meshes</h1>
  </>
)

export default Page

const MESH_COLOR = 'blue'

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
        <GenericObjectShowcase label='Geometry + Material = Mesh'>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <GlossyMaterial color={MESH_COLOR} />
          </mesh>
        </GenericObjectShowcase>
      </group>
    </Center>
  </>
)
