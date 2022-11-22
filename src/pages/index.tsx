// import dynamic from 'next/dynamic'
import { OverlayPage } from '@/components/dom/OverlayPage'
import { AlternativeIntroductionScene } from '@/scenes/0-alternative-introduction'

// const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

const Page = (props) => <OverlayPage />

export default Page

Page.canvas = (props) => (
  <>
    <AlternativeIntroductionScene />
  </>
)

// export async function getStaticProps() {
//   return { props: { title: 'Index' } }
// }
