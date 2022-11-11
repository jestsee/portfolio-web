import { NavbarItem } from '@components/Navbar/NavbarItem'
import { useHamburger } from '@hooks/useHamburger'
import { useScrollNavbar } from '@hooks/useScrollNavbar'
import { useEffect } from 'react'
import Hamburger from '../Hamburger'

export function Navbar() {
  const { expand, click } = useHamburger()
  const { controlNavbar, show, lastScrollY } = useScrollNavbar()
  const mobile = `max-lg:h-[105vh] max-lg:w-[100vw] max-lg:-translate-y-8 max-lg:bg-black`

  useEffect(() => {
    if (!window) return
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 z-10 grid h-16 w-full grid-cols-2 bg-mirage/75 text-lg backdrop-blur-sm backdrop-filter transition-all duration-300 lg:h-20 lg:grid-cols-5 lg:px-16 lg:py-6 xl:left-[50%] xl:mx-auto xl:max-w-[1200px] xl:-translate-x-[50%] xl:px-0 ${
        show ? 'translate-y-0' : '-translate-y-[100%]'
      }`}
    >
      <div className="ml-8 mt-5 -mb-5 font-bold max-sm:font-semibold sm:text-2xl lg:m-0">
        Jestsee.
      </div>
      <Hamburger
        className="z-10 mr-8 mt-4 -mb-4"
        expand={expand}
        onClick={click}
      />
      <div
        className={`${
          !expand ? 'max-lg:-translate-x-[200%]' : ''
        } ${mobile} col-span-2 transition-all duration-300 max-lg:pt-[26vh] lg:col-span-4`}
      >
        <div className="grid grid-cols-2 max-lg:font-montserrat lg:grid-cols-4">
          <ul className="col-span-3 grid grid-cols-1 gap-y-4 text-center max-lg:mt-16 lg:grid-cols-3">
            <NavbarItem
              text="Home"
              className="lg:place-self-end lg:self-center"
              href="#top"
            />
            <NavbarItem
              text="Section 2"
              className="lg:place-self-center lg:self-center"
            />
            <NavbarItem
              text="Section 3"
              className="lg:place-self-start lg:self-center"
            />
          </ul>
          <button
            type="button"
            className="rounded-lg px-6 py-1.5 font-semibold max-lg:col-span-2 max-lg:mt-4 max-lg:text-teal-400 lg:max-w-fit lg:place-self-end lg:bg-[#009683] lg:text-sm"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  )
}
