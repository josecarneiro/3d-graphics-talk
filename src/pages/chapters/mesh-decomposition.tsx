import { OverlayPage } from '@/components/dom/OverlayPage'
import { MeshDecompositionScene } from '@/scenes/h-mesh-decomposition'

const Page = () => (
  <>
    <OverlayPage />
    <h1>MeshDecomposition</h1>
  </>
)

Page.canvas = MeshDecompositionScene

export default Page
