import Link from 'next/link'
import { Navigation } from './Navigation'
import { OverlayGeneric } from './OverlayGeneric'

export const OverlayMain = () => (
  <OverlayGeneric>
    <header className='flex justify-between'>
      <Link href='/table-of-contents'>
        <h1>November 2022</h1>
      </Link>
      <h1>Web 3D Graphics</h1>
    </header>
    <footer className='flex justify-between'>
      <h1>José Carneiro | hello@josecarnei.ro</h1>
      <Navigation />
    </footer>
  </OverlayGeneric>
)
