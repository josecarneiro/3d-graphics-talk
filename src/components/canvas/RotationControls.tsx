import { OrbitControls } from '@react-three/drei'

export const RotationControls = ({ autoRotate }: { autoRotate?: boolean }) => (
  <OrbitControls
    autoRotate={autoRotate}
    autoRotateSpeed={-0.2}
    zoomSpeed={0.25}
    minZoom={40}
    maxZoom={160}
    enablePan={false}
    dampingFactor={0.05}
    minPolarAngle={Math.PI / 4}
    maxPolarAngle={Math.PI / 4}
  />
)
