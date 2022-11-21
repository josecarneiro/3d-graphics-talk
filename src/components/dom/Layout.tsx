import { useRef, forwardRef, HTMLAttributes } from 'react'
import { mergeRefs } from 'react-merge-refs'

type LayoutProps = HTMLAttributes<HTMLDivElement>

const Layout = forwardRef<any, LayoutProps>(({ children, ...props }, ref) => {
  const localRef = useRef()
  return (
    <div
      ref={mergeRefs([ref, localRef])}
      className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom bg-zinc-900 text-gray-50'
      style={{ backgroundColor: '#f2f2f5' }}>
      {children}
    </div>
  )
})

Layout.displayName = 'Layout'

export default Layout
