import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, PerspectiveCamera } from '@react-three/drei'
import {
  InstancedRigidBodies,
  InstancedRigidBodyApi,
  Physics,
  RigidBody,
} from '@react-three/rapier'
import { easing } from 'maath'
import { Vector3, MathUtils } from 'three'

const POINTER_COLOR = '#0050dd'
const BALL_COLOR = '#e17522'

const DEFAULT_BALL_COUNT = 25

const Scene = ({
  count = DEFAULT_BALL_COUNT,
  vec = new Vector3(),
  rfs = MathUtils.randFloatSpread,
}) => {
  const api = useRef<InstancedRigidBodyApi>()
  useFrame((_state, delta) => {
    if (api.current) {
      api.current.forEach((body) => {
        body.applyImpulse(
          vec
            .copy(body.translation())
            .normalize()
            .multiplyScalar(-400 * delta),
        )
      })
    }
  })
  return (
    <InstancedRigidBodies
      ref={api}
      colliders='ball'
      linearDamping={0.65}
      angularDamping={0.95}
      positions={Array.from({ length: count }, () => [rfs(10), rfs(10), rfs(10)])}>
      <instancedMesh castShadow receiveShadow args={[undefined, undefined, count]}>
        <sphereGeometry />
        <meshLambertMaterial color={BALL_COLOR} />
      </instancedMesh>
    </InstancedRigidBodies>
  )
}

const Pointer = ({ vec = new Vector3() }) => {
  const ref = useRef<any>()
  useFrame(({ mouse, viewport }, delta) => {
    easing.damp3(
      vec,
      [(mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0],
      0.1,
      delta,
      Infinity,
    )
    if (ref.current) {
      ref.current.setNextKinematicTranslation(vec)
    }
  })

  return (
    <RigidBody type='kinematicPosition' colliders='ball' ref={ref}>
      <Sphere receiveShadow castShadow args={[1]}>
        {/* <meshStandardMaterial color={POINTER_COLOR} roughness={0} envMapIntensity={0.2} /> */}
        <meshLambertMaterial color={POINTER_COLOR} />
      </Sphere>
    </RigidBody>
  )
}

// const Effects = (props) => (
//   <EffectComposer {...props}>
//     <SSAO radius={0.2} intensity={20} color='blue' />
//   </EffectComposer>
// )

const AERODYNAMICS_WORKSHOP_HDR =
  'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr'
// const AERODYNAMICS_WORKSHOP_HDR ='/adamsbridge.hdr'

export const PhysicsScene = () => (
  <>
    {/* <DefaultCamera /> */}
    <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={35} near={1} far={40} />
    {/* <PhysicsScene /> */}
    {/* <ambientLight intensity={1} />
    <spotLight
      intensity={0.5}
      angle={0.2}
      penumbra={1}
      position={[30, 30, 30]}
      castShadow
      shadow-mapSize={[512, 512]}
    /> */}
    {/* <directionalLight intensity={10} position={[-10, -10, -10]} color='purple' /> */}
    <Physics gravity={[0, 2, 0]}>
      <Scene />
      <Pointer />
    </Physics>
    {/* <Environment files={AERODYNAMICS_WORKSHOP_HDR} blur={0.7} /> */}
    {/* <Effects /> */}
    {/* <EffectComposer>
      <SSAO radius={0.4} intensity={50} luminanceInfluence={0.4} color='red' />
      <Bloom intensity={1.25} kernelSize={3} luminanceThreshold={0.5} luminanceSmoothing={0.0} />
    </EffectComposer> */}
    {/* <fog attach='fog' args={['red', 25, 35]} /> */}
    {/* <color attach='background' args={['#feef8a']} /> */}
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
