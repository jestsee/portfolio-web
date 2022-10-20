import NavbarItem from '@components/NavbarItem';

const Navbar = () => {
  return (
    <>
      <div className="text-lg flex justify-between items-center">
        <div className="font-bold text-2xl">Jestsee.</div>
        <ul className="grid grid-cols-3 w-[500px] text-center">
          <NavbarItem text='Home'/>
          <NavbarItem text='Section 2'/>
          <NavbarItem text='Section 3'/>
        </ul>
        <button className="bg-[#009683] font-bold px-4 py-[0.125rem] rounded-2xl">
          Resume
        </button>
      </div>
    </>
  )
}

export default Navbar
