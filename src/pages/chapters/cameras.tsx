import { CamerasScene } from '@/scenes/m-cameras'
import { loadContent } from '@/utilities/loadContent'

export async function getStaticProps() {
  const content = await loadContent('cameras-example.tsx')
  return { props: { content } }
}

const Page = () => <></>

Page.fullCanvas = (props) => <CamerasScene {...props} />

export default Page
