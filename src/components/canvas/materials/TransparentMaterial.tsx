import { DoubleSide } from 'three'

import type { MeshBasicMaterialProps } from '@react-three/fiber'

export const TransparentMaterial = ({
  opacity = 0,
  color = 'white',
  ...props
}: MeshBasicMaterialProps) => (
  <meshBasicMaterial side={DoubleSide} transparent opacity={opacity} color={color} {...props} />
)
