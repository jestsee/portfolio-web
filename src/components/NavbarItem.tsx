interface Props {
  className?: string
  text: string
}

const NavbarItem = ({text, className}:Props) => {
 return <li className={className}>{text}</li>
}

export default NavbarItem