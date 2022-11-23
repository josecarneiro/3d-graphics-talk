import { Center } from '@react-three/drei'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { EdgeMaterial } from '@/components/canvas/materials'
import {
  GenericObjectShowcaseProps,
  GenericObjectShowcase,
} from '@/components/canvas/GenericObjectShowcaseProps'
import { DefaultLights } from '@/components/canvas/DefaultLights'
import { MonkeyModel } from '@/components/canvas/MonkeyModel'
import { CodeExample } from '@/components/canvas/CodeExample'
import { useState } from 'react'

const MESH_COLOR = 'blue'

const GeometryShowcase = ({ children, ...props }: GenericObjectShowcaseProps) => (
  <GenericObjectShowcase {...props}>
    <mesh>
      {children}
      <EdgeMaterial color={MESH_COLOR} />
    </mesh>
  </GenericObjectShowcase>
)

export const GeometryScene = ({ content }) => {
  const [showCodeExample, setShowCodeExample] = useState(false)
  const displayCodeExample = () => setShowCodeExample(true)
  return (
    <>
      {showCodeExample && <CodeExample content={content} />}
      <Grid />
      <DefaultCamera />
      <DefaultControls autoRotate />
      <DefaultLights />
      <Center top>
        <group scale={2}>
          <GeometryShowcase
            label={showCodeExample ? undefined : 'Box'}
            onClick={displayCodeExample}>
            <boxGeometry args={[1, 1, 1]} />
          </GeometryShowcase>
          <GeometryShowcase label={showCodeExample ? undefined : 'Sphere'} position={[2, 0, 0]}>
            <sphereGeometry args={[0.75, 12, 8]} />
          </GeometryShowcase>
          <GeometryShowcase label={showCodeExample ? undefined : 'Cone'} position={[4, 0, 0]}>
            <coneGeometry args={[0.5, 1, 5]} />
          </GeometryShowcase>
          <GeometryShowcase
            label={showCodeExample ? undefined : 'Icosahedron'}
            position={[6, 0, 0]}>
            <icosahedronGeometry args={[0.5, 0]} />
          </GeometryShowcase>
          <GeometryShowcase label={showCodeExample ? undefined : 'Plane'} position={[0, 0, 3]}>
            <planeGeometry args={[1, 1]} />
          </GeometryShowcase>
          <GeometryShowcase label={showCodeExample ? undefined : 'Torus Knot'} position={[2, 0, 3]}>
            <torusKnotGeometry args={[0.55, 0.125, 50, 10]} />
          </GeometryShowcase>
          <GenericObjectShowcase
            label={showCodeExample ? undefined : 'Custom'}
            position={[4, 0, 3]}>
            <MonkeyModel position={[0, -0.5, 0]}>
              <EdgeMaterial color={MESH_COLOR} />
            </MonkeyModel>
          </GenericObjectShowcase>
        </group>
      </Center>
    </>
  )
}
