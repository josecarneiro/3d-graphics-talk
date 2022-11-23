import { Navigation } from './Navigation'
import { OverlayGeneric } from './OverlayGeneric'

export const OverlayMain = () => (
  <OverlayGeneric>
    <header className='flex justify-end'>
      <h1>Main Header</h1>
    </header>
    <footer>
      <h1>José Carneiro | hello@josecarnei.ro</h1>
    </footer>
  </OverlayGeneric>
)
