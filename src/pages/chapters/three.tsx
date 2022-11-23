import { OverlayPage } from '@/components/dom/OverlayPage'
import { ThreeScene } from '@/scenes/d-three'
import { loadContent } from '@/utilities/loadContent'

export async function getStaticProps() {
  const content = await loadContent('three-example.ts')
  return { props: { content } }
}

const Page = () => (
  <>
    <OverlayPage />
  </>
)

Page.canvas = (props) => <ThreeScene {...props} />

export default Page
