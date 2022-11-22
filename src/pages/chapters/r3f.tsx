import { OverlayPage } from '@/components/dom/OverlayPage'
import { R3fScene } from '@/scenes/e-r3f'
import { GeometryScene } from '@/scenes/i-geometry'

const Page = () => (
  <>
    <OverlayPage />
    <h1>Geometry</h1>
  </>
)

Page.canvas = () => <R3fScene />

export default Page
