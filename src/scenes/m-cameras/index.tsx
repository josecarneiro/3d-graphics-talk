import { Canvas } from '@react-three/fiber'
import {
  View,
  OrthographicCamera,
  OrbitControls,
  PerspectiveCamera,
  Environment,
  useKeyboardControls,
} from '@react-three/drei'
import useRefs from 'react-use-refs'
import { useGLTF } from '@react-three/drei'
import { RenderInClientSide } from '@/components/RenderInClientSide'
import { BOTTLE_GLTF } from '@/constants/paths'

import type { GroupProps, MeshStandardMaterialProps } from '@react-three/fiber'
import { DefaultControls } from '@/components/canvas/DefaultControls'
import { CodeExample } from '@/components/canvas/CodeExample'
import { useState } from 'react'
import { useKeyPress } from 'ahooks'

type SodaProps = GroupProps & Pick<MeshStandardMaterialProps, 'wireframe'>

export const Soda = ({ wireframe, ...props }: SodaProps) => {
  const { nodes } = useGLTF(BOTTLE_GLTF)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={(nodes.Mesh_sodaBottle as any).geometry}>
        <meshStandardMaterial
          color='green'
          roughness={0}
          metalness={0.8}
          envMapIntensity={2}
          wireframe={wireframe}
        />
      </mesh>
      <mesh geometry={(nodes.Mesh_sodaBottle_1 as any).geometry}>
        <meshStandardMaterial color='red' envMapIntensity={0} wireframe={wireframe} />
      </mesh>
    </group>
  )
}

const ModelGroup = ({ size = 10, ...props }) => (
  <group {...props}>
    {new Array(size)
      .fill(0)
      .map((_, j) =>
        new Array(size)
          .fill(0)
          .map((_, k) => (
            <Soda key={`${j}-${k}`} scale={2} position={[k - size / 2, 0, j - size / 2]} />
          )),
      )}
  </group>
)

export const CamerasCanvasInner = ({ content }) => {
  const [ref, view1, view2] = useRefs()
  const [showCodeExample, setShowCodeExample] = useState(false)
  const triggerShowCode = () => setShowCodeExample(true)
  useKeyPress(['ctrl.enter'], () => triggerShowCode())
  return (
    <div ref={ref} className='container'>
      <div ref={view1} className='relative overflow-hidden' />
      <div ref={view2} className='relative overflow-hidden' />
      <Canvas className='canvas'>
        {showCodeExample && <CodeExample content={content} />}
        <View index={1} track={view1}>
          <color attach='background' args={['#fed200']} />
          <PerspectiveCamera makeDefault position={[4, 4, 4]} />
          <Lights preset='lobby' />
          <ModelGroup position={[0, -0.75, 0]} scale={1.5} />
          <DefaultControls autoRotate />
        </View>
        <View index={2} track={view2}>
          <color attach='background' args={['cyan']} />
          <Lights preset='lobby' />
          <OrthographicCamera makeDefault position={[4, 4, 4]} zoom={100} />
          <ModelGroup position={[0, -0.75, 0]} scale={1.5} />
          <DefaultControls autoRotate />
        </View>
      </Canvas>
    </div>
  )
}

const Lights = ({ preset }) => (
  <>
    <ambientLight intensity={1} />
    <pointLight position={[20, 30, 10]} />
    <pointLight position={[-10, -10, -10]} color='blue' />
    <Environment preset={preset} />
  </>
)

export const CamerasScene = (props) => (
  <RenderInClientSide>
    <CamerasCanvasInner {...props} />
  </RenderInClientSide>
)
