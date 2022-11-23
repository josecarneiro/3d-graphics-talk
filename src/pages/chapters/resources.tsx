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
      </li>
    </ol>
  </PageWrapper>
)

export default Page
