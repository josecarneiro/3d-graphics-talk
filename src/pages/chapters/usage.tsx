import { OverlayPage } from '@/components/dom/OverlayPage'
import { UsageScene } from '@/scenes/g-usage'
import { loadContent } from '@/utilities/loadContent'

const Page = () => (
  <>
    <OverlayPage />
  </>
)

export async function getStaticProps() {
  const content = await loadContent('usage-example.tsx')
  return { props: { content } }
}

Page.canvas = (props) => <UsageScene {...props} />

export default Page
