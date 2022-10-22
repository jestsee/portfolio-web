import { NavbarItem } from '@components/NavbarItem'
import { useHamburger } from 'src/hooks/useHamburger'
import Hamburger from './Hamburger'

export function Navbar() {
  const { expand, click } = useHamburger()
  return (
    <>
      <div className="sticky z-10 top-0 grid w-full grid-cols-2 bg-mirage text-lg max-lg:p-4 lg:py-8 lg:grid-cols-5">
        <div className="font-bold max-sm:font-semibold sm:text-2xl">
          Jestsee.
        </div>
        <Hamburger expand={expand} onClick={click} />
        {expand && <div className="col-span-2 grid grid-cols-2 lg:col-span-4 lg:grid-cols-4">
          <ul className="col-span-3 grid grid-cols-1 text-center lg:grid-cols-3">
            <NavbarItem text="Home" />
            <NavbarItem text="Section 2" />
            <NavbarItem text="Section 3" />
          </ul>
          <button
            type="button"
            className="rounded-2xl bg-[#009683] px-4 py-[0.125rem] font-bold max-lg:col-span-2"
          >
            Resume
          </button>
        </div>}
      </div>
    </>
  )
}
