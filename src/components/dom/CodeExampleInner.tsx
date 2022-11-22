import { ComponentProps, useMemo } from 'react'
import { Sandpack } from '@codesandbox/sandpack-react'

const REACT_THREE_FIBER_DEPENDENCIES = {
  '@react-three/drei': '^9.40.0',
  '@react-three/fiber': '^8.9.0',
  '@react-three/rapier': '0.8.2',
  '@react-three/postprocessing': '2.7.0',
  react: '^18.2.0',
  'react-dom': '^18.2.0',
  'react-scripts': '^5.0.1',
  three: '^0.146.0',
  'three-stdlib': '^2.17.3',
}

const DEFAULT_FILE_CONTENT = `
const App = () => (
  <h1>Hello World</h1>
)

export default App
`

const DEFAULT_TEMPLATE = 'react-ts'

export type CodeExampleInnerProps = { content?: string } & ComponentProps<typeof Sandpack>

export const CodeExampleInner = ({
  content = DEFAULT_FILE_CONTENT,
  template = DEFAULT_TEMPLATE,
}: CodeExampleInnerProps) => {
  const files = useMemo(
    () => ({
      ...(template === 'react-ts' && {
        '/App.tsx': content.trim(),
      }),
      ...(template === 'vanilla' && {
        '/src/index.js': content.trim(),
      }),
      ...(template === 'vanilla-ts' && {
        '/src/index.ts': content.trim(),
      }),
    }),
    [content, template],
  )
  return (
    <Sandpack
      template={template}
      files={files}
      customSetup={{
        dependencies: { ...REACT_THREE_FIBER_DEPENDENCIES },
      }}
    />
  )
}
