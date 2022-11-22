import { OverlayPage } from '@/components/dom/OverlayPage'
import { MeshScene } from '@/scenes/k-mesh'

const Page = () => (
  <>
    <OverlayPage />
    <h1>Mesh</h1>
  </>
)

Page.canvas = MeshScene

export default Page
