import { OrbitControls } from '@react-three/drei'

import type { ComponentProps } from 'react'

type DefaultControlsProps = ComponentProps<typeof OrbitControls> & {
  angle?: number
}

export const DefaultControls = ({
  autoRotate = true,
  autoRotateSpeed,
  angle = Math.PI / 4,
  ...props
}: DefaultControlsProps) => (
  <OrbitControls
    {...props}
    autoRotate={autoRotate}
    autoRotateSpeed={autoRotateSpeed || -0.5}
    zoomSpeed={0.25}
    minZoom={40}
    maxZoom={160}
    enablePan={false}
    dampingFactor={0.05}
    minPolarAngle={angle}
    maxPolarAngle={angle}
  />
)
