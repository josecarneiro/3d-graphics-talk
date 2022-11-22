import { useGLTF } from '@react-three/drei'
import { memo } from 'react'

/**
 * Generic model component, takes gltf url and props
 */
export const Model = memo(({ url, ...props }: { url: string }) => {
  const { scene } = useGLTF(url)
  return <primitive object={scene} {...props} />
})

Model.displayName = 'Model'
