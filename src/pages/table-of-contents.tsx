import { ROUTES } from '@/constants/routes'
import Link from 'next/link'
import { PageWrapper } from '../components/PageWrapper'

const Page = () => (
  <PageWrapper>
    <ol>
      {ROUTES.map((route) => (
        <li key={route.path}>
          <Link href={route.path}>{route.name}</Link>
        </li>
      ))}
    </ol>
  </PageWrapper>
)

export default Page
