import { NavbarItem } from '@components/NavbarItem'
import { useHamburger } from 'src/hooks/useHamburger'
import Hamburger from './Hamburger'

export function Navbar() {
  const { expand, click } = useHamburger()

  const mobile = `max-lg:h-[105vh] max-lg:w-[100vw] max-lg:-translate-y-8 max-lg:bg-black`

  return (
    <div className="fixed top-0 z-10 grid h-8 w-full grid-cols-2 text-lg lg:grid-cols-5 lg:py-8 lg:px-16 xl:left-[50%] xl:mx-auto xl:max-w-[1200px] xl:-translate-x-[50%]">
      <div className="ml-6 mt-5 -mb-5 font-bold max-sm:font-semibold sm:text-2xl lg:m-0">
        Jestsee.
      </div>
      <Hamburger
        className="z-10 mr-5 mt-4 -mb-4"
        expand={expand}
        onClick={click}
      />
      <div
        className={`${
          !expand ? 'max-lg:-translate-x-[200%]' : ''
        } ${mobile} col-span-2 transition-all max-lg:pt-[32vh] lg:col-span-4`}
      >
        <div className="grid grid-cols-2 max-lg:font-montserrat lg:grid-cols-4">
          <ul className="col-span-3 grid grid-cols-1 gap-y-4 text-center max-lg:mt-16 lg:grid-cols-3">
            <NavbarItem text="Home" className="place-self-end self-center" />
            <NavbarItem
              text="Section 2"
              className="place-self-center self-center"
            />
            <NavbarItem
              text="Section 3"
              className="place-self-start self-center"
            />
          </ul>
          <button
            type="button"
            className="rounded-2xl px-4 py-[0.125rem] font-bold max-lg:col-span-2 max-lg:mt-4 max-lg:text-teal-400 lg:bg-[#009683]"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  )
}
