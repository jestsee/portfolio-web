import { useRef, useState } from 'react'

export function useHamburger() {
  const [expand, setExpand] = useState(false)
  const elementRef = useRef()
  const click = () => {
    setExpand(!expand)
    console.log(elementRef.current);
    
  }
  return { expand, click, elementRef }
}
