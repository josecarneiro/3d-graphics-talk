import { MaterialsScene } from '@/scenes/j-materials'
import { loadContent } from '@/utilities/loadContent'

export async function getStaticProps() {
  const content = await loadContent('material-example.tsx')
  return { props: { content } }
}

const Page = () => <></>

Page.canvas = (props) => <MaterialsScene {...props} />

export default Page
