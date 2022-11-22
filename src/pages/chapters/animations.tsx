import { OverlayPage } from '@/components/dom/OverlayPage'
import { GeometryScene } from '@/scenes/i-geometry'

const Page = () => (
  <>
    <OverlayPage />
    <h1>Animations</h1>
  </>
)

Page.canvas = () => <GeometryScene />

export default Page
