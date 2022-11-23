import { useState } from 'react'

const useHover = () => {
  const [hovered, hover] = useState(false)
  return [hovered, { onPointerOver: (e) => hover(true), onPointerOut: () => hover(false) }] as const
}
