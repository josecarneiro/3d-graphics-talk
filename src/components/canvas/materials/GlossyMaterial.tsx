import { DoubleSide } from 'three'

export const GlossyMaterial = ({ color }: { color: string }) => (
  <meshPhysicalMaterial
    color={color}
    emissive={'black'}
    metalness={0.5}
    roughness={0.5}
    reflectivity={0.5}
    clearcoat={0.5}
    clearcoatRoughness={0.5}
    side={DoubleSide}
  />
)
