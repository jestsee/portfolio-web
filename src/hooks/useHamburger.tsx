import { useState } from 'react'

export function useHamburger() {
  const [expand, setExpand] = useState(false)
  const click = () => setExpand(!expand)
  return { expand, click }
}
