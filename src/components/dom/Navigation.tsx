import { ROUTES } from '@/constants/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'

import ArrowBack from '@mui/icons-material/ArrowBack'
import ArrowForward from '@mui/icons-material/ArrowForward'

export const Navigation = () => {
  const { asPath } = useRouter()
  const matchingRouteIndex = ROUTES.findIndex((route) => route.path === asPath)
  const previousRoute = ROUTES[matchingRouteIndex - 1]
  const nextRoute = ROUTES[matchingRouteIndex + 1]
  return (
    <span className='whitespace-pre'>
      {previousRoute && (
        <Link href={previousRoute.path}>
          <ArrowBack /> {previousRoute.name}
        </Link>
      )}
      {/* {previousRoute && nextRoute && ` | `} */}
      {previousRoute && nextRoute && `    `}
      {nextRoute && (
        <Link href={nextRoute.path}>
          {nextRoute.name} <ArrowForward />
        </Link>
      )}
    </span>
  )
}
