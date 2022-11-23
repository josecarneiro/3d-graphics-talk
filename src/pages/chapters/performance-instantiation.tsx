import { InstantiationScene } from '@/scenes/r-performance-instantiation'
import { loadContent } from '@/utilities/loadContent'

export async function getStaticProps() {
  const content = await loadContent('instantiation-example.tsx')
  return { props: { content } }
}

const Page = () => <></>

Page.canvas = (props) => <InstantiationScene {...props} />

export default Page
