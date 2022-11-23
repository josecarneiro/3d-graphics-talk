import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { Center } from '@react-three/drei'
import { GlossyMaterial } from '@/components/canvas/materials'
import { GenericObjectShowcase } from '@/components/canvas/GenericObjectShowcaseProps'

const MESH_COLOR = 'blue'

export const MeshScene = (props) => (
  <>
    <Grid />
    <DefaultCamera />
    <DefaultControls autoRotate />
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <spotLight position={[50, 40, 40]} castShadow />
    <spotLight position={[-50, 40, -40]} castShadow />
    <pointLight position={[-10, -10, -10]} />
    <Center top>
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
