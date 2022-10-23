import type { BaseProps } from '@custom-types/props'
import { CloseIcon } from '@icons/CloseIcon'
import { HamburgerIcon } from '@icons/HamburgerIcon'
import { useRef } from 'react'

interface Props extends BaseProps {
  expand: boolean
  onClick: CallableFunction
}
export default function Hamburger({ expand, onClick, className }: Props) {
  const elmRef = useRef<HTMLDivElement>(null)

  const click = () => {
    onClick()
    if (elmRef.current) {
      if (
        !elmRef.current.classList.contains(
          'animate-[spin_250ms_ease-in-out_infinite]'
        )
      ) {
        elmRef.current.classList.add(
          'animate-[spin_250ms_ease-in-out_infinite]'
        )
      }
      setTimeout(() => {
        elmRef?.current?.classList.remove(
          'animate-[spin_250ms_ease-in-out_infinite]'
        )
      }, 250)
    }
  }
  return (
    <div
      ref={elmRef}
      className={`${className} max-h-fit place-self-end lg:hidden`}
      onClick={click}
    >
      {!expand ? (
        <HamburgerIcon className="h-6 w-6" />
      ) : (
        <CloseIcon className="h-5 w-6" />
      )}
    </div>
  )
}
