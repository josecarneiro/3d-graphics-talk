import { OverlayPage } from '@/components/dom/OverlayPage'
import { AnimationsScene } from '@/scenes/n-animations'

import { loadContent } from '../../utilities/loadContent'

export async function getStaticProps() {
  const content = await loadContent('animation-example.tsx')
  return { props: { content } }
}

const Page = (props) => (
  <>
    <OverlayPage />
    <h1>Animations</h1>
  </>
)

Page.canvas = (props) => <AnimationsScene {...props} />

export default Page
