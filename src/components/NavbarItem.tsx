import type { BaseProps } from '@custom-types/props'

interface Props extends BaseProps {
  text: string
  href?: string
}

export function NavbarItem({ text, className, href }: Props) {
  return (
    <li
      className={`${className} cursor-pointer max-lg:font-montserrat`}
    >
      <a href={href}>{text}</a>
    </li>
  )
}
