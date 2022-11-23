import { PageWrapper } from '@/components/PageWrapper'
import Link from 'next/link'

const Page = () => (
  <PageWrapper>
    <ol>
      <li>
        <Link href='https://docs.pmnd.rs/react-three-fiber/getting-started/introduction'>
          React Three Fiber Document
        </Link>
        <Link href='https://twitter.com/0xca0a'>0xca0a</Link>
        <Link href='https://threejs.org/docs/'>Three.js Docs</Link>
        <Link href='https://codesandbox.org/'>CodeSandbox R3F Boilerplate</Link>
      </li>
    </ol>
  </PageWrapper>
)

export default Page
