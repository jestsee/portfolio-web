import { useState } from "react"

export const useScrollNavbar = () => {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (!window) return
    if (window.scrollY > lastScrollY) setShow(false)
    else setShow(true)
    setLastScrollY(window.scrollY)
  }

  return {controlNavbar, show, lastScrollY}
}