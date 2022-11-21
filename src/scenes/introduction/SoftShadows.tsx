import { RandomizedLight, AccumulativeShadows } from '@react-three/drei'

type SoftShadowsProps = { color: string }

export const SoftShadows = ({ color }: SoftShadowsProps) => (
  <AccumulativeShadows
    temporal
    frames={100}
    color={color}
    colorBlend={5}
    toneMapped={true}
    alphaTest={0.9}
    opacity={0.75}
    scale={30}
    position={[0, -1.01, 0]}>
    <RandomizedLight
      amount={4}
      radius={10}
      ambient={0.5}
      intensity={1}
      position={[0, 10, -10]}
      size={15}
      mapSize={1024}
      bias={0.0001}
    />
  </AccumulativeShadows>
)
