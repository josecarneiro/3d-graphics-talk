import { Html } from '@react-three/drei'
import { CodeExampleInner, CodeExampleInnerProps } from '@/components/dom/CodeExampleInner'
import { useOutsideAlerter } from '@/hooks/useOutsideAlerter'

type CodeExampleProps = CodeExampleInnerProps & {
  onClose?: () => void
}

export const CodeExample = ({ onClose, ...props }: CodeExampleProps) => {
  const callback = () => onClose?.()
  const ref = useOutsideAlerter(callback)
  return (
    <Html
      className='CodeExampleHtmlWrapper'
      style={{
        width: `calc(100vw - 2em)`,
        height: `calc(100vh - 8em)`,
        transform: `translate(-50%, -50%)`,
      }}>
      <div ref={ref} className='codeExampleWrapper'>
        <CodeExampleInner {...props} />
      </div>
    </Html>
  )
}
