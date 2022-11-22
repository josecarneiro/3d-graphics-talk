import { OverlayPage } from '@/components/dom/OverlayPage'
import { ThreeScene } from '@/scenes/d-three'

const Page = () => (
  <>
    <OverlayPage />
    <h1>Geometry</h1>
  </>
)

Page.canvas = () => <ThreeScene />

export default Page
