import { useLayoutEffect, useState } from 'react'

export const RenderInClientSide = ({ children }) => {
  const [client, setClient] = useState(false)
  useLayoutEffect(() => {
    setClient(true)
  }, [setClient])
  return client ? children : null
}
