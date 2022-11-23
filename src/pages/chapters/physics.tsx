import { OverlayPage } from '@/components/dom/OverlayPage'
// import { GeometryScene } from '@/scenes/i-geometry'
import { PhysicsScene } from '@/scenes/o-physics'

const Page = () => (
  <>
    <OverlayPage />
    <h1>Animations</h1>
  </>
)

Page.canvas = () => <PhysicsScene />

export default Page
