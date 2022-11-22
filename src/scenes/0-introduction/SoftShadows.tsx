import { RandomizedLight, AccumulativeShadows, ContactShadows } from '@react-three/drei'

type SoftShadowsProps = { color?: string }

// const Shadows = memo(() => (
//   <AccumulativeShadows
//     temporal
//     frames={100}
//     color='lightblue'
//     colorBlend={1}
//     toneMapped={true}
//     alphaTest={0.9}
//     opacity={1}
//     scale={15}
//     position={[0, 0, 0]}>
//     <RandomizedLight
//       amount={8}
//       radius={15}
//       ambient={0.5}
//       intensity={1}
//       position={[-5, 10, 0]}
//       bias={0.001}
//     />
//   </AccumulativeShadows>
// ))

export const SoftShadows = ({ color = 'black' }: SoftShadowsProps) => (
  <AccumulativeShadows
    temporal
    frames={100}
    color={color}
    colorBlend={1}
    toneMapped={true}
    alphaTest={0.9}
    opacity={0.5}
    position={[0, 0, 0]}
    scale={30}
    // position={[0, -1.01, 0]}
  >
    {/* <RandomizedLight
      amount={4}
      radius={10}
      ambient={0.5}
      intensity={1}
      position={[0, 10, -10]}
      size={15}
      mapSize={1024}
      bias={0.0001}
    /> */}
    <RandomizedLight
      amount={4}
      radius={15}
      ambient={0.5}
      intensity={1}
      position={[-5, 10, 0]}
      bias={0.001}
      mapSize={1024}
    />
  </AccumulativeShadows>
)

/*
export const SoftShadows = ({ color }: SoftShadowsProps) => (
  <ContactShadows
    position={[0, 0, 0]}
    scale={10}
    far={3}
    blur={3}
    rotation={[Math.PI / 2, 0, 0]}
    color={'black'}
  />
)
*/
