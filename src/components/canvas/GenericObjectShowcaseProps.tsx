import { Html } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

export type GenericObjectShowcaseProps = GroupProps & { label?: string }

export const GenericObjectShowcase = ({
  children,
  label,
  ...props
}: GenericObjectShowcaseProps) => (
  <group {...props}>
    {children}
    {label && (
      <Html transform={true} position={[0, 0, 1.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <strong className='text-sm'>{label}</strong>
      </Html>
    )}
  </group>
)
