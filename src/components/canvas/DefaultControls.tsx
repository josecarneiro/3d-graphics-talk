import { OrbitControls } from '@react-three/drei'

import type { ComponentProps } from 'react'

type DefaultControlsProps = ComponentProps<typeof OrbitControls>

export const DefaultControls = ({ autoRotateSpeed, ...props }: DefaultControlsProps) => (
  <OrbitControls
    {...props}
    autoRotateSpeed={autoRotateSpeed || -0.5}
    zoomSpeed={0.25}
    minZoom={40}
    maxZoom={160}
    enablePan={false}
    dampingFactor={0.05}
    minPolarAngle={Math.PI / 4}
    maxPolarAngle={Math.PI / 4}
  />
)
