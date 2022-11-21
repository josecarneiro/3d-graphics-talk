import { Html } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

export type GenericObjectShowcaseProps = GroupProps & { label: string }
export const GenericObjectShowcase = ({
  children,
  label,
  ...props
}: GenericObjectShowcaseProps) => (
  <group {...props}>
    {children}
    <Html transform={true} position={[0, 0, 1.5]} rotation={[-Math.PI / 2, 0, 0]}>
      <h1>{label}</h1>
    </Html>
  </group>
)
