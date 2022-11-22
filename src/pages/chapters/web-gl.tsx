import { OverlayPage } from '@/components/dom/OverlayPage'
import { WebGlScene } from '@/scenes/c-web-gl'
import { GeometryScene } from '@/scenes/i-geometry'

const Page = () => (
  <>
    <OverlayPage />
    <h1>Geometry</h1>
  </>
)

Page.canvas = () => <WebGlScene />

export default Page
