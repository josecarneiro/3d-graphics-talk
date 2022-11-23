import { LightsScene } from '@/scenes/l-lights'
import { loadContent } from '@/utilities/loadContent'

export async function getStaticProps() {
  const content = await loadContent('lights-example.tsx')
  return { props: { content } }
}

const Page = () => <></>

Page.canvas = (props) => <LightsScene {...props} />

export default Page
