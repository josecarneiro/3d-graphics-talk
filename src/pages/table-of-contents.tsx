import { ROUTES } from '@/constants/routes'
import { joinClassNames } from '@/utilities/cn'
import Link from 'next/link'

import type { HTMLAttributes } from 'react'

const PageWrapper = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <main className={joinClassNames('px-4 py-16 flex flex-col justify-center h-full', className)}>
    {children}
  </main>
)

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
