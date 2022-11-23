import { MeshScene } from '@/scenes/h-mesh'
import { loadContent } from '@/utilities/loadContent'

export async function getStaticProps() {
  const content = await loadContent('mesh-example.tsx')
  return { props: { content } }
}

const Page = () => <></>

Page.canvas = (props) => <MeshScene {...props} />

export default Page
