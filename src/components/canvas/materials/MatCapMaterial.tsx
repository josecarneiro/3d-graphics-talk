import { useTexture } from '@react-three/drei'

export const MatCapMaterial = () => {
  const [matcap] = useTexture(['/metal-anisotropic'])
  return <meshMatcapMaterial matcap={matcap} />
}
