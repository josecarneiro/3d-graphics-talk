import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import { OverlayMain } from '@/components/dom/OverlayMain'
import '@/styles/index.css'
// TODO Remove this import
import '@/scenes/m-cameras/styles.css'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

const DEFAULT_TITLE = '3D Web Graphics'

const App = ({ Component, pageProps = { title: DEFAULT_TITLE } }) => {
  const ref = useRef()
  return (
    <>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        {/* The canvas can either be in front of the dom or behind. If it is in front it can overlay contents.
         * Setting the event source to a shared parent allows both the dom and the canvas to receive events.
         * Since the event source is now shared, the canvas would block events, we prevent that with pointerEvents: none. */}
        {Component?.canvas && (
          <Scene className='pointer-events-none' eventSource={ref} eventPrefix='client'>
            {Component.canvas(pageProps)}
          </Scene>
        )}
        {Component?.fullCanvas && Component.fullCanvas(pageProps)}
        <OverlayMain />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
