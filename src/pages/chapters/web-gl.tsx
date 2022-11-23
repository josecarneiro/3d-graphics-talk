import { OverlayPage } from '@/components/dom/OverlayPage'
import { WebGlScene } from '@/scenes/c-web-gl'
import { loadContent } from '@/utilities/loadContent'

export async function getStaticProps() {
  const content = await loadContent('webgl-example.ts')
  return { props: { content } }
}

const Page = () => <></>

Page.canvas = (props) => <WebGlScene {...props} />

export default Page
