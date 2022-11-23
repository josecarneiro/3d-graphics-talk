import { OverlayPage } from '@/components/dom/OverlayPage'
import { InstallationScene } from '@/scenes/f-installation'

const Page = () => (
  <>
    <OverlayPage />
    <h1>Geometry</h1>
  </>
)

Page.canvas = () => <InstallationScene />

export default Page
