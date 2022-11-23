import { useRef, forwardRef, HTMLAttributes } from 'react'
import { mergeRefs } from 'react-merge-refs'
import { cn } from '../../utilities/cn'

type LayoutProps = HTMLAttributes<HTMLDivElement>

const Layout = forwardRef<any, LayoutProps>(({ children, className, ...props }, ref) => {
  const localRef = useRef()
  return (
    <div
      ref={mergeRefs([ref, localRef])}
      className={cn(
        'absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden font-mono dom text-zync-900 bg-zync-50',
        className,
      )}>
      {children}
    </div>
  )
})

Layout.displayName = 'Layout'

export default Layout
