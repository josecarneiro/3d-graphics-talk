import { GeometryScene } from '@/scenes/i-geometry'
import { loadContent } from '@/utilities/loadContent'

export async function getStaticProps() {
  const content = await loadContent('geometry-example.tsx')
  return { props: { content } }
}

const Page = () => <></>

Page.canvas = (props) => <GeometryScene {...props} />

export default Page
