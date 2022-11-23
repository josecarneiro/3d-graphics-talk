import {
  WebGLRenderer,
  Scene,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  PerspectiveCamera,
  Color,
  Vector3,
} from 'three'

const scene = new Scene()
const camera = new PerspectiveCamera(100, 1, 0.1, 1000)

Object.assign(camera.position, { x: 1, y: 1, z: 1 })
camera.lookAt(new Vector3(0, 0, 0))

const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshBasicMaterial({ color: 0xff0000 })
const cube = new Mesh(geometry, material)
scene.add(cube)
scene.background = new Color(0xffffff)

const animate = () => {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.005
  cube.rotation.y += 0.005
  cube.rotation.z += 0.005
  renderer.render(scene, camera)
}

animate()
