import type { MeshBasicMaterialProps } from '@react-three/fiber'

export const TransparentMaterial = ({
  opacity = 0,
  color = 'white',
  ...props
}: MeshBasicMaterialProps) => (
  <meshBasicMaterial transparent opacity={opacity} color={color} {...props} />
)
