import { Html } from '@react-three/drei'

export const TerminalExample = ({ command, ...props }) => {
  return (
    <Html center>
      <pre className='p-10 text-lg bg-white border border-zync-100 rounded-md'>{command}</pre>
    </Html>
  )
}
