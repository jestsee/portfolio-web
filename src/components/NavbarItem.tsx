import type { BaseProps } from "@custom-types/props"

interface Props extends BaseProps {
  text: string
}

export function NavbarItem({text, className}:Props) {
 return <li className={className}>{text}</li>
}