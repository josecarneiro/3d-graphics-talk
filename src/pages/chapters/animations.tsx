import { OverlayPage } from '@/components/dom/OverlayPage'
import { AnimationsScene } from '@/scenes/n-animations'

const Page = () => (
  <>
    <OverlayPage />
    <h1>Animations</h1>
  </>
)

Page.canvas = () => <AnimationsScene />

export default Page
