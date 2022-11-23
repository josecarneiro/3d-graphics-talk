import { OverlayPage } from '@/components/dom/OverlayPage'
import { MeshScene } from '@/scenes/h-mesh'

const Page = () => (
  <>
    <OverlayPage />
    <h1>MeshDecomposition</h1>
  </>
)

Page.canvas = MeshScene

export default Page
