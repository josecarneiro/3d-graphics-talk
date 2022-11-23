import { Environment } from '@react-three/drei'
import { ComponentProps, Suspense } from 'react'

export const BaseLights = () => (
  <>
    <ambientLight intensity={0.5} />
    {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <spotLight position={[50, 40, 40]} castShadow />
    <spotLight position={[-50, 40, -40]} castShadow />
    <pointLight position={[-10, -10, -10]} /> */}
    {/* <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} /> */}
    <ambientLight intensity={1.5} />
    <directionalLight position={[-10, -10, -5]} intensity={0.5} />
    <directionalLight
      castShadow
      intensity={4}
      position={[50, 50, 25]}
      shadow-mapSize={[256, 256]}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />
  </>
)

// export const DefaultLights = BaseLights

const Lights = ({ preset = 'lobby' }: Pick<ComponentProps<typeof Environment>, 'preset'>) => (
  <>
    {/* <ambientLight intensity={1} /> */}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} />
    <pointLight position={[-10, -10, -10]} color='blue' />
    <Suspense fallback={null}>
      <Environment preset={preset} />
    </Suspense>
  </>
)

export const DefaultLights = Lights
