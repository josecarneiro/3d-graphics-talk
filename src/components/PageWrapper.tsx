import { joinClassNames } from '@/utilities/cn'
import { HTMLAttributes } from 'react'

export const PageWrapper = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <main className={joinClassNames('px-4 py-16 flex flex-col justify-center h-full', className)}>
    {children}
  </main>
)
