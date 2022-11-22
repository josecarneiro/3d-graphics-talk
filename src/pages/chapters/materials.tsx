import { OverlayPage } from '@/components/dom/OverlayPage'
import { MaterialsScene } from '@/scenes/j-materials'

const Page = () => (
  <>
    <OverlayPage />
    <h1>Materials</h1>
  </>
)

Page.canvas = MaterialsScene

export default Page
