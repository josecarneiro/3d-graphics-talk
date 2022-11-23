import { PhysicsScene } from '@/scenes/o-physics'
import { loadContent } from '@/utilities/loadContent'

export async function getStaticProps() {
  const content = await loadContent('physics-example.tsx')
  return { props: { content } }
}

const Page = () => <></>

Page.canvas = (props) => <PhysicsScene {...props} />

export default Page
