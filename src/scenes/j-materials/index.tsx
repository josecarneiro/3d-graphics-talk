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
import { Suspense, useState } from 'react'
import { MatCapMaterial } from '../../components/canvas/materials/MatCapMaterial'
import { CodeExample } from '@/components/canvas/CodeExample'

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

export const MaterialsScene = ({ content }) => {
  const [showCodeExample, setShowCodeExample] = useState(false)
  const displayCodeExample = () => setShowCodeExample(true)
  return (
    <>
      {showCodeExample && <CodeExample content={content} />}
      <Grid />
      <DefaultCamera />
      <DefaultControls autoRotate />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <spotLight position={[50, 40, 40]} castShadow />
      <spotLight position={[-50, 40, -40]} castShadow />
      <pointLight position={[-10, -10, -10]} />
      <Center top>
        <group scale={1.5}>
          <MaterialShowcase
            label={showCodeExample ? undefined : 'Basic'}
            onClick={displayCodeExample}>
            <meshBasicMaterial color={MESH_COLOR} />
          </MaterialShowcase>
          <MaterialShowcase label={showCodeExample ? undefined : 'Lambert'} position={[2, 0, 0]}>
            <ambientLight color='black' />
            <meshLambertMaterial color={MESH_COLOR} />
          </MaterialShowcase>
          <MaterialShowcase label={showCodeExample ? undefined : 'Phong'} position={[4, 0, 0]}>
            <meshPhongMaterial color={MESH_COLOR} />
          </MaterialShowcase>
          <MaterialShowcase label={showCodeExample ? undefined : 'Physical'} position={[6, 0, 0]}>
            <GlossyMaterial color={MESH_COLOR} />
          </MaterialShowcase>
          <MaterialShowcase label={showCodeExample ? undefined : 'Normal'} position={[8, 0, 0]}>
            <meshNormalMaterial />
          </MaterialShowcase>
          <MaterialShowcase label={showCodeExample ? undefined : 'Depth'} position={[0, 0, 3]}>
            <meshDepthMaterial />
          </MaterialShowcase>
          <MaterialShowcase label={showCodeExample ? undefined : 'Standard'} position={[2, 0, 3]}>
            <meshStandardMaterial color={MESH_COLOR} />
          </MaterialShowcase>
          <MaterialShowcase label={showCodeExample ? undefined : 'Toon'} position={[4, 0, 3]}>
            <meshToonMaterial color={MESH_COLOR} />
          </MaterialShowcase>
          <MaterialShowcase label={showCodeExample ? undefined : 'Shader'} position={[6, 0, 3]}>
            <FlowingShaderMaterial />
          </MaterialShowcase>
          <Suspense fallback={null}>
            <MaterialShowcase label={showCodeExample ? undefined : 'MatCap'} position={[8, 0, 3]}>
              <MatCapMaterial />
            </MaterialShowcase>
          </Suspense>
        </group>
      </Center>
    </>
  )
}
