import { Sphere } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { BallCollider, CuboidCollider, RigidBodyApi } from '@react-three/rapier'
import { useRef } from 'react'
import { Box, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { createContext, ReactNode, Suspense, useContext, useState, StrictMode } from 'react'

const Ball = () => {
  const ball = useRef<RigidBodyApi>(null)

  useFrame(() => {
    if (ball.current) {
      if (ball.current.translation().y < -10) {
        ball.current.setTranslation({ x: Math.random() * 2, y: 20, z: 0 })
        ball.current.setLinvel({ x: 0, y: 0, z: 0 })
      }
    }
  })

  return (
    <RigidBody
      ref={ball}
      colliders='ball'
      position={[Math.random(), 5 + Math.random() * 20, Math.random()]}>
      <Sphere castShadow receiveShadow>
        <meshPhysicalMaterial color='red' />
      </Sphere>
    </RigidBody>
  )
}

export const Colliders = () => {
  return (
    <group>
      <Ball />
      <Ball />
      <Ball />
      <Ball />
      <Ball />

      <group position={[0, 0, 0]} name='potato'>
        <CuboidCollider args={[10, 1, 10]} position={[0, 0, 0]} rotation={[0.1, 0.1, 0.2]} />
        <BallCollider args={[3]} position={[1, 2, 1]} />
      </group>
    </group>
  )
}

const demoContext = createContext<{
  setDebug?(f: boolean): void
  setPaused?(f: boolean): void
}>({})

export const useDemo = () => useContext(demoContext)

export interface Demo {
  (props: { children?: ReactNode }): JSX.Element
}

const Floor = () => {
  return (
    <RigidBody type='fixed' colliders='cuboid'>
      <Box position={[0, -12.55 - 5, 0]} scale={[200, 10, 200]} rotation={[0, 0, 0]} receiveShadow>
        <shadowMaterial opacity={0.2} />
      </Box>
    </RigidBody>
  )
}

const App = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(blue, white)',
        fontFamily: 'sans-serif',
      }}>
      <Suspense fallback='Loading...'>
        <Canvas shadows>
          <StrictMode>
            <Physics>
              <directionalLight
                castShadow
                position={[10, 10, 10]}
                shadow-camera-bottom={-40}
                shadow-camera-top={40}
                shadow-camera-left={-40}
                shadow-camera-right={40}
                shadow-mapSize-width={1024}
                shadow-bias={-0.0001}
              />
              <Environment preset='apartment' />
              <OrbitControls />

              <Colliders />

              <Floor />
            </Physics>
          </StrictMode>
        </Canvas>
      </Suspense>
    </div>
  )
}

export default App
