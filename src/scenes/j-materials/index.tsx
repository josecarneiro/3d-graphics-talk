import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { Center } from '@react-three/drei'
import { GlossyMaterial } from '@/components/canvas/materials'
import {
  GenericObjectShowcaseProps,
  GenericObjectShowcase,
} from '@/components/canvas/GenericObjectShowcaseProps'
import { FlowingShaderMaterial } from '@/components/canvas/materials/FlowingShaderMaterial'
import { Rotate } from '@/components/canvas/Rotate'

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

const MESH_COLOR = 'blue'

export const MaterialsScene = (props) => (
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
        <MaterialShowcase label='Shader' position={[6, 0, 3]}>
          <FlowingShaderMaterial />
        </MaterialShowcase>
      </group>
    </Center>
  </>
)
