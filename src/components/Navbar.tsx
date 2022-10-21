import { NavbarItem } from '@components/NavbarItem'

export function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between text-lg py-12">
        <div className="text-2xl font-bold">Jestsee.</div>
        <ul className="grid w-[500px] grid-cols-1 sm:grid-cols-3 text-center">
          <NavbarItem text="Home" />
          <NavbarItem text="Section 2" />
          <NavbarItem text="Section 3" />
        </ul>
        <button className="rounded-2xl bg-[#009683] px-4 py-[0.125rem] font-bold">
          Resume
        </button>
      </div>
    </>
  )
}
