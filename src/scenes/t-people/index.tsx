import { OverlayPage } from '@/components/dom/OverlayPage'
import { AlternativeIntroductionScene } from '@/scenes/0-alternative-introduction'

const Page = () => <OverlayPage />

export default Page

Page.canvas = () => <AlternativeIntroductionScene />
