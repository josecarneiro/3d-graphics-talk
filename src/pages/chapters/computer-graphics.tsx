import { OverlayPage } from '@/components/dom/OverlayPage'
import { ComputerGraphicsScene } from '@/scenes/a-computer-graphics'

const Page = () => (
  <>
    <OverlayPage />
    <h1>Geometry</h1>
  </>
)

Page.canvas = () => <ComputerGraphicsScene />

export default Page
