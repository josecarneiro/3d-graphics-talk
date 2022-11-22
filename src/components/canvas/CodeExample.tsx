import { Html } from '@react-three/drei'
import { CodeExampleInner, CodeExampleInnerProps } from '@/components/dom/CodeExampleInner'
import { useOutsideAlerter } from '@/hooks/useOutsideAlerter'

type CodeExampleProps = CodeExampleInnerProps & {
  onClose?: () => void
}

export const CodeExample = ({ onClose, ...props }: CodeExampleProps) => {
  // const callback = () => onClose?.()
  const callback = () => {}
  const ref = useOutsideAlerter(callback)
  return (
    <Html className='CodeExampleHtmlWrapper' center>
      <div ref={ref} className='CodeExampleHtmlWrapperChild'>
        <CodeExampleInner {...props} />
      </div>
    </Html>
  )
}
