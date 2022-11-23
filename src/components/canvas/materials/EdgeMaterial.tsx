import { Edges } from '@react-three/drei'
import { TransparentMaterial } from '@/components/canvas/materials'

import type { ComponentProps } from 'react'

export const EdgeMaterial = (props: ComponentProps<typeof Edges>) => (
  <>
    <TransparentMaterial opacity={1} />
    <Edges {...props} threshold={1} />
  </>
)
