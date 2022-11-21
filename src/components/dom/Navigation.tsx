import { ROUTES } from '@/constants/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Navigation = () => {
  const { asPath } = useRouter()
  const matchingRouteIndex = ROUTES.findIndex((route) => route.path === asPath)
  const previousRoute = ROUTES[matchingRouteIndex - 1]
  const nextRoute = ROUTES[matchingRouteIndex + 1]
  return (
    <>
      {previousRoute && <Link href={previousRoute.path}>{`<- ${previousRoute.name}`}</Link>}
      {previousRoute && nextRoute && <span> | </span>}
      {nextRoute && <Link href={nextRoute.path}>{`${nextRoute.name} ->`}</Link>}
    </>
  )
}
