import { OrthographicCamera } from '@react-three/drei'

export const DefaultCamera = () => (
  <OrthographicCamera makeDefault position={[10, 20, 20] as any} zoom={75} />
)
