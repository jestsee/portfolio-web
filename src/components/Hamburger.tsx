import type { BaseProps } from '@custom-types/props'
import { CloseIcon } from '@icons/CloseIcon'
import { HamburgerIcon } from '@icons/HamburgerIcon'

interface Props extends BaseProps {
  expand: boolean
  onClick: CallableFunction
}
export default function Hamburger({expand, onClick}:Props) {
  return (
    <div className="max-h-fit place-self-end lg:hidden" onClick={() => onClick()}>
      {!expand ? (
        <HamburgerIcon className="h-6 w-6" />
      ) : (
        <CloseIcon className="h-5 w-6" />
      )}
    </div>
  )
}
