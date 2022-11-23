import { useRef, useState } from 'react'
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
import { CodeExample } from '@/components/canvas/CodeExample'
import { useKeyPress } from 'ahooks'

const POINTER_COLOR = '#0050dd'
const BALL_COLOR = '#e17522'

const DEFAULT_BALL_COUNT = 25

const Scene = ({
  count = DEFAULT_BALL_COUNT,
  vec = new Vector3(),
  rfs = MathUtils.randFloatSpread,
  ...props
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
      positions={Array.from({ length: count }, () => [rfs(10), rfs(10), rfs(10)])}
      {...props}>
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
        <meshLambertMaterial color={POINTER_COLOR} />
      </Sphere>
    </RigidBody>
  )
}

export const PhysicsScene = ({ content }) => {
  const [showCodeExample, setShowCodeExample] = useState(false)
  const displayCodeExample = () => setShowCodeExample(true)
  useKeyPress(['ctrl.enter'], () => displayCodeExample())
  return (
    <>
      {showCodeExample && <CodeExample content={content} />}
      <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={35} near={1} far={40} />
      <Physics gravity={[0, 2, 0]}>
        <Scene onClick={displayCodeExample} />
        <Pointer />
      </Physics>
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
}
