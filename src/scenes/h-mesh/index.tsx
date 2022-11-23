import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { Center } from '@react-three/drei'
import { EdgeMaterial, GlossyMaterial } from '@/components/canvas/materials'
import { GenericObjectShowcase } from '@/components/canvas/GenericObjectShowcaseProps'
import { Rotate } from '@/components/canvas/Rotate'
import { useState } from 'react'
import { CodeExample } from '@/components/canvas/CodeExample'

const MESH_COLOR = 'blue'

export const MeshScene = ({ content }) => {
  const [showCodeExample, setShowCodeExample] = useState(false)
  const displayCodeExample = () => setShowCodeExample(true)
  return (
    <>
      {showCodeExample && <CodeExample content={content} />}
      <Grid />
      <DefaultCamera />
      <DefaultControls enableZoom={!showCodeExample} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <spotLight position={[50, 40, 40]} castShadow />
      <spotLight position={[-50, 40, -40]} castShadow />
      <pointLight position={[-10, -10, -10]} />
      <Center top>
        <group scale={2}>
          <GenericObjectShowcase label={showCodeExample ? undefined : 'Geometry  '}>
            <Rotate>
              <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <EdgeMaterial color={MESH_COLOR} />
              </mesh>
            </Rotate>
          </GenericObjectShowcase>
          <GenericObjectShowcase label={showCodeExample ? undefined : '+'} position={[1, 0, 0]} />
          <GenericObjectShowcase
            label={showCodeExample ? undefined : '  Material'}
            position={[2, 0, 0]}>
            <Rotate>
              <mesh rotation={[-Math.PI / 2, 0.5, 0.9]}>
                <planeGeometry args={[1, 1, 1]} />
                <GlossyMaterial color={MESH_COLOR} />
              </mesh>
            </Rotate>
          </GenericObjectShowcase>
          <GenericObjectShowcase
            label={showCodeExample ? undefined : '='}
            position={[3.75, 0, 0]}
          />
          <GenericObjectShowcase
            label={showCodeExample ? undefined : 'Mesh'}
            position={[5, 0, 0]}
            onClick={displayCodeExample}>
            <Rotate>
              <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <GlossyMaterial color={MESH_COLOR} />
              </mesh>
            </Rotate>
          </GenericObjectShowcase>
        </group>
      </Center>
    </>
  )
}
