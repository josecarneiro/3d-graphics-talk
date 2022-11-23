import { Center } from '@react-three/drei'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultLights } from '@/components/canvas/DefaultLights'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { CodeExample } from '@/components/canvas/CodeExample'
import { Object3D, Color, MathUtils, InstancedMesh } from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

const DESIRED_COUNT = 200
const SIDE = Math.floor(DESIRED_COUNT ** (1 / 3))
const COUNT = SIDE ** 3

const colors = ['#ff4e50', '#fc913a', '#f9d423', '#ede574', '#e1f5c4']

const tempObject = new Object3D()
const tempColor = new Color()
const data = Array.from({ length: COUNT }, () => ({
  color: colors[Math.floor(Math.random() * 5)],
  scale: 1,
}))

const Boxes = (props) => {
  const [hovered, setHovered] = useState<number | undefined>()
  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(COUNT).fill(null).flatMap((_, i) => tempColor.set(data[i].color).toArray()),
      ),
    [],
  )
  const meshRef = useRef<InstancedMesh>()
  const prevRef = useRef<number | undefined>()

  useEffect(() => void (prevRef.current = hovered), [hovered])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      // meshRef.current.rotation.x = Math.sin(time / 4)
      // meshRef.current.rotation.y = Math.sin(time / 2)
      let i = 0
      for (let x = 0; x < SIDE; x++)
        for (let y = 0; y < SIDE; y++)
          for (let z = 0; z < SIDE; z++) {
            const id = i++
            tempObject.position.set(SIDE / 2 - x, SIDE / 2 - y, SIDE / 2 - z)
            tempObject.rotation.y =
              Math.sin(x / 4 + time) + Math.sin(y / 4 + time) + Math.sin(z / 4 + time)
            tempObject.rotation.z = tempObject.rotation.y * 2
            if (hovered !== prevRef.current) {
              ;(id === hovered
                ? tempColor.setRGB(10, 10, 10)
                : tempColor.set(data[id].color)
              ).toArray(colorArray, id * 3)
              meshRef.current.geometry.attributes.color.needsUpdate = true
            }
            const scale = (data[id].scale = MathUtils.lerp(
              data[id].scale,
              id === hovered ? 2.5 : 1,
              0.1,
            ))
            tempObject.scale.setScalar(scale)
            tempObject.updateMatrix()
            meshRef.current.setMatrixAt(id, tempObject.matrix)
          }
      meshRef.current.instanceMatrix.needsUpdate = true
    }
  })
  return (
    <instancedMesh
      ref={meshRef}
      args={[null, null, COUNT]}
      onPointerMove={(e) => (e.stopPropagation(), setHovered(e.instanceId))}
      onPointerOut={(e) => setHovered(undefined)}
      {...props}>
      <icosahedronGeometry args={[0.5, 0]}>
        <instancedBufferAttribute attach='attributes-color' args={[colorArray, 3]} />
      </icosahedronGeometry>
      <meshNormalMaterial vertexColors />
    </instancedMesh>
  )
}

export const InstantiationScene = ({ content }) => {
  const [showCodeExample, setShowCodeExample] = useState(false)
  const displayCodeExample = () => setShowCodeExample(true)
  return (
    <>
      {showCodeExample && <CodeExample content={content} />}
      <Grid />
      <DefaultCamera />
      <DefaultControls autoRotate enableZoom={!showCodeExample} />
      <DefaultLights />
      <Center top>
        <Boxes onClick={displayCodeExample} />
      </Center>
    </>
  )
}
