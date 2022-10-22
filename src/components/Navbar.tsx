import { NavbarItem } from '@components/NavbarItem'
import { HamburgerIcon } from '@icons/HamburgerIcon'

export function Navbar() {
  return (
    <>
      <div className="grid grid-cols-2 py-12 text-lg max-sm:py-8 lg:grid-cols-5">
        <div className="font-bold max-sm:font-semibold sm:text-2xl">
          Jestsee.
        </div>
        <HamburgerIcon className="h-6 w-6 place-self-end lg:hidden" />
        <ul className="col-span-3 grid grid-cols-1 text-center lg:grid-cols-3">
          <NavbarItem text="Home" />
          <NavbarItem text="Section 2" />
          <NavbarItem text="Section 3" />
        </ul>
        <button className="rounded-2xl bg-[#009683] px-4 py-[0.125rem] font-bold max-lg:col-span-2">
          Resume
        </button>
      </div>
    </>
  )
}
