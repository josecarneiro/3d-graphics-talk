import { Object3D, Color, MathUtils, InstancedMesh } from 'three'
import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const colors = ['#ff4e50', '#fc913a', '#f9d423', '#ede574', '#e1f5c4']

const tempObject = new Object3D()
const tempColor = new Color()
const data = Array.from({ length: 1000 }, () => ({
  color: colors[Math.floor(Math.random() * 5)],
  scale: 1,
}))

const Boxes = () => {
  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(1000).fill(null).flatMap((_, i) => tempColor.set(data[i].color).toArray()),
      ),
    [],
  )
  const meshRef = useRef<InstancedMesh>()
  const prevRef = useRef<number | undefined>()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time / 4)
      meshRef.current.rotation.y = Math.sin(time / 2)
      let i = 0
      for (let x = 0; x < 10; x++)
        for (let y = 0; y < 10; y++)
          for (let z = 0; z < 10; z++) {
            const id = i++
            tempObject.position.set(5 - x, 5 - y, 5 - z)
            tempObject.rotation.y =
              Math.sin(x / 4 + time) + Math.sin(y / 4 + time) + Math.sin(z / 4 + time)
            tempObject.rotation.z = tempObject.rotation.y * 2
            tempObject.updateMatrix()
            meshRef.current.setMatrixAt(id, tempObject.matrix)
          }
      meshRef.current.instanceMatrix.needsUpdate = true
    }
  })
  return (
    <instancedMesh ref={meshRef} args={[null, null, 1000]}>
      <boxGeometry args={[0.5, 0.5, 0.5]}>
        <instancedBufferAttribute attach='attributes-color' args={[colorArray, 3]} />
      </boxGeometry>
      <meshBasicMaterial toneMapped={false} vertexColors />
    </instancedMesh>
  )
}

export const App = () => (
  <div style={{ height: '100vh' }}>
    <Canvas gl={{ antialias: false }} camera={{ position: [0, 0, 15], near: 5, far: 20 }}>
      <Boxes />
    </Canvas>
  </div>
)

export default App
