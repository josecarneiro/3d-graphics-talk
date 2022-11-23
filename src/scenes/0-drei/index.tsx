import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Trail, Float, Line, Sphere, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Color, EllipseCurve, Mesh } from 'three'

export const ReactScene = () => (
  <>
    <color attach='background' args={['black']} />
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Atom />
    </Float>
    <Stars
      saturation={0}
      radius={0.125}
      // depth={50}
      count={5000}
      // factor={4}
      fade
      speed={1}
      // count={400}
      // speed={0.5}
    />
    <EffectComposer>
      <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
    </EffectComposer>
  </>
)

const LINE_COLOR = '#00aaff'
const ATOM_COLOR = '#ff00aa'

const points = new EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100)

const Atom = (props) => (
  <group {...props}>
    <Line worldUnits points={points} color='turquoise' lineWidth={0.3} />
    <Line worldUnits points={points} color='turquoise' lineWidth={0.3} rotation={[0, 0, 1]} />
    <Line worldUnits points={points} color='turquoise' lineWidth={0.3} rotation={[0, 0, -1]} />
    <Electron position={[0, 0, 0.5]} speed={6} />
    <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5} />
    <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7} />
    <Sphere args={[0.55, 64, 64]}>
      <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
    </Sphere>
  </group>
)

const Electron = ({ radius = 2.75, speed = 6, ...props }) => {
  const ref = useRef<Mesh>()
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime() * speed
      ref.current.position.set(
        Math.sin(t) * radius,
        (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
        0,
      )
    }
  })
  return (
    <group {...props}>
      <Trail local width={5} length={6} color={new Color(2, 1, 10)} attenuation={(t) => t * t}>
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  )
}
