import { useAnimations, useGLTF } from '@react-three/drei'
import { PrimitiveProps } from '@react-three/fiber'
import { memo, useEffect, useRef } from 'react'

type ModelProps = PrimitiveProps & {
  animations?: string[]
  url: string
}

/**
 * Generic model component, takes gltf url and props
 */
export const Model = memo(({ url, animations: animationNames = [], ...props }: ModelProps) => {
  const group = useRef()
  const { scene, animations } = useGLTF(url, true)
  const { actions, mixer } = useAnimations(animations, group)
  useEffect(() => {
    for (let name of animationNames) {
      actions[name]?.play()
    }
  }, [animationNames, actions])
  return <primitive ref={group} object={scene} dispose={null} {...props} />
})

Model.displayName = 'Model'
