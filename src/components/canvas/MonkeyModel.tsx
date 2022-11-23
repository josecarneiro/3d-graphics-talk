import { Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import { MONKEY_MODEL_URL } from '@/constants/paths'

const MonkeyMesh = ({ children, ...props }) => {
  const { nodes } = useGLTF(MONKEY_MODEL_URL)
  return (
    <mesh geometry={(nodes.Suzanne as any).geometry} {...props}>
      {children}
    </mesh>
  )
}

useGLTF.preload(MONKEY_MODEL_URL)

export const MonkeyModel = (props) => (
  <Suspense fallback={null}>
    <MonkeyMesh {...props} />
  </Suspense>
)
