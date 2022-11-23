import { Suspense } from 'react'
import { useGLTF } from '@react-three/drei'

const URL =
  'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/suzanne-high-poly/model.gltf'
// const URL = '/suzanne.gltf'

const MonkeyMesh = ({ children, ...props }) => {
  const { nodes } = useGLTF(URL)
  return (
    <mesh geometry={(nodes.Suzanne as any).geometry} {...props}>
      {children}
    </mesh>
  )
}

useGLTF.preload('/suzanne.gltf')

export const MonkeyModel = (props) => (
  <Suspense fallback={null}>
    <MonkeyMesh {...props} />
  </Suspense>
)
