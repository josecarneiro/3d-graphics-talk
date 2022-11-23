import { OverlayPage } from '@/components/dom/OverlayPage'
import { R3fScene } from '@/scenes/e-r3f'
import { loadContent } from '@/utilities/loadContent'

export async function getStaticProps() {
  const content = await loadContent('r3f-example.tsx')
  return { props: { content } }
}

const Page = () => (
  <>
    <OverlayPage />
  </>
)

Page.canvas = (props) => <R3fScene {...props} />

export default Page
