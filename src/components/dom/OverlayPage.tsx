import { Navigation } from './Navigation'
import { OverlayGeneric } from './OverlayGeneric'

export const OverlayPage = () => (
  <OverlayGeneric>
    <header>
      <h1>Web 3D Graphics</h1>
    </header>
    <footer className='flex justify-end'>
      <Navigation />
    </footer>
  </OverlayGeneric>
)
