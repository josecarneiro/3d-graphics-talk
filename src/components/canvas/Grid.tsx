import { Instance, Instances } from '@react-three/drei'

// const DARK_GRID_COLOR = '#999'
// const DARK_GRID_COLOR = '#aaa'
const DARK_GRID_COLOR = '#bbb'
// const DARK_GRID_COLOR = '#000'
// const LIGHT_GRID_COLOR = '#bbb'
const LIGHT_GRID_COLOR = '#ccc'
// const LIGHT_GRID_COLOR = '#aaa'

export const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
  <Instances position={[0, -0.02, 0]}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color={DARK_GRID_COLOR} />
    {Array.from({ length: number }, (_, y) =>
      Array.from({ length: number }, (_, x) => (
        <group
          key={x + ':' + y}
          position={[
            x * 2 - Math.floor(number / 2) * 2,
            -0.01,
            y * 2 - Math.floor(number / 2) * 2,
          ]}>
          <Instance rotation={[-Math.PI / 2, 0, 0]} />
          <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        </group>
      )),
    )}
    <gridHelper args={[100, 100, LIGHT_GRID_COLOR, LIGHT_GRID_COLOR]} position={[0, -0.01, 0]} />
  </Instances>
)
