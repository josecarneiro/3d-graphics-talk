import { OverlayPage } from '@/components/dom/OverlayPage'
import { GeometryScene } from '@/scenes/i-geometry'
import { CamerasScene } from '@/scenes/m-cameras'

const Page = () => (
  <>
    <OverlayPage />
    <h1>Geometry</h1>
  </>
)

// Page.canvas = () => <GeometryScene />
Page.fullCanvas = () => <CamerasScene />

export default Page
