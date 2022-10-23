import type { BaseProps } from "@custom-types/props"

interface Props extends BaseProps {
  text: string
}

export function NavbarItem({text, className}:Props) {
 return <li className={`${className} max-lg:font-montserrat max-lg:text-sm`}>{text}</li>
}