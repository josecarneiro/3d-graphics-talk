import { Environment, Html, Lightformer } from '@react-three/drei'
import { useControls, button } from 'leva'
import { ResinText } from './ResinText'
import { SoftShadows } from './SoftShadows'
import { takeScreenshot } from '../../utilities/takeScreenshot'
import { Grid } from '@/components/canvas/Grid'
import { DefaultCamera } from '@/components/canvas/DefaultCamera'
import { DefaultControls } from '@/components/canvas/DefaultControls'

const HtmlExplanation = () => {
  return (
    <Html style={{ backgroundColor: 'red' }}>
      <div>
        <h1>Hello World</h1>
      </div>
    </Html>
  )
}

export const IntroductionScene = () => {
  const { autoRotate, shadow, ...config } = useControls({
    clearcoat: { value: 1, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 0.25, min: 0, max: 1 },
    uRefractPower: { value: 0.35, min: 0, max: 5 },
    uTransparent: { value: 0.25, min: 0, max: 5 },
    uIntensity: { value: 1.3, min: 0.0, max: 5.0 },
    uNoise: { value: 0.03, min: 0, max: 1, step: 0.01 },
    uSat: { value: 1.0, min: 1, max: 1.25, step: 0.01 },
    uColor: '#8ebfff',
    gColor: '#4792d7',
    shadow: '#9c97ad',
    autoRotate: true,
    screenshot: button(takeScreenshot),
  })
  return (
    <>
      {/* <HtmlExplanation /> */}
      <DefaultCamera />
      {/* <color attach='background' args={['#f2f2f5']} /> */}
      {/** The text and the grid */}
      <ResinText
        config={config}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, -2.5]}
        scale={0.5}>
        3D Web
      </ResinText>
      <ResinText
        config={config}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 2.5]}
        scale={0.5}>
        Graphics
      </ResinText>
      <Grid />
      <DefaultControls />
      {/** The environment is just a bunch of shapes emitting light. This is needed for the clear-coat */}
      <Environment resolution={32}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <Lightformer
            intensity={10}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={4}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={20}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={10}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 2, 1]}
          />
          <Lightformer
            type='ring'
            intensity={10}
            rotation-y={Math.PI / 2}
            position={[-0.1, -1, -5]}
            scale={10}
          />
        </group>
      </Environment>
      <SoftShadows color={shadow} />
    </>
  )
}
