import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export const Rotate = ({ children }) => {
  const ref = useRef<any>()
  useFrame(() => {
    ref.current.rotation.y += 0.01
    ref.current.rotation.x += 0.01
    ref.current.rotation.z += 0.01
  })
  return <group ref={ref}>{children}</group>
}
