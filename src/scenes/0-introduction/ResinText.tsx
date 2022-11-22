import { useRef } from 'react'
import { RGBELoader } from 'three-stdlib'
import { useFrame, useLoader } from '@react-three/fiber'
import { useFBO, Center, Text3D } from '@react-three/drei'
import { MeshRefractionMaterial } from './shaders/MeshRefractionMaterial'

import type { Group } from 'three'

const AERODYNAMICS_WORKSHOP_HDR =
  'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr'

const TEXT_LETTER_SPACING = -0.03
const TEXT_SCALE = 5

export const ResinText = ({ children, config, font = '/Inter_Medium_Regular.json', ...props }) => {
  const ref = useRef<Group>()
  const fbo = useFBO(1024)
  const texture = useLoader(RGBELoader, AERODYNAMICS_WORKSHOP_HDR)

  let oldBg
  useFrame((state) => {
    if (!ref.current) return
    // Hide the outer groups contents
    ref.current.visible = false
    // Set render target to the local buffer
    state.gl.setRenderTarget(fbo)
    // Save the current background and set the HDR as the new BG
    // This is what creates the reflections
    oldBg = state.scene.background
    state.scene.background = texture
    // Render into the buffer
    state.gl.render(state.scene, state.camera)
    // Set old state back
    state.scene.background = oldBg
    state.gl.setRenderTarget(null)
    ref.current.visible = true
  })

  return (
    <>
      <group ref={ref}>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={TEXT_SCALE}
            letterSpacing={TEXT_LETTER_SPACING}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={1}
            curveSegments={128}
            bevelThickness={0.01}>
            {children}
            {/** Pass the rendered buffer into the refraction shader */}
            <MeshRefractionMaterial uSceneTex={fbo.texture} {...config} />
          </Text3D>
        </Center>
      </group>
      {/** Double up the text as a flat layer at the bottom for more interesting refraction */}
      <Center scale={[0.8, 1, 1]} front top {...props}>
        <Text3D
          font={font}
          scale={TEXT_SCALE}
          letterSpacing={TEXT_LETTER_SPACING}
          height={0.01}
          curveSegments={32}>
          {children}
          <meshBasicMaterial color={config.gColor} />
        </Text3D>
      </Center>
    </>
  )
}
