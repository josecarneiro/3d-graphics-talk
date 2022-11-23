import { Html } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

export type GenericObjectShowcaseProps = GroupProps & {
  label?: string
  textOffset?: number
}

export const GenericObjectShowcase = ({
  children,
  label,
  textOffset = 1.5,
  ...props
}: GenericObjectShowcaseProps) => (
  <group {...props}>
    {children}
    {label && (
      <Html transform={true} position={[0, 0, textOffset]} rotation={[-Math.PI / 2, 0, 0]}>
        <strong className='text-sm whitespace-pre'>{label}</strong>
      </Html>
    )}
  </group>
)
