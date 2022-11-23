import { OverlayPage } from '@/components/dom/OverlayPage'
import { R3fScene } from '@/scenes/e-r3f'
import { loadContent } from '@/utilities/loadContent'

export async function getStaticProps() {
  const exampleText = await loadContent('r3f-example.tsx')
  return { props: { exampleText } }
}

const Page = () => (
  <>
    <OverlayPage />
    <h1>Geometry</h1>
  </>
)

Page.canvas = (props) => <R3fScene {...props} />

export default Page
