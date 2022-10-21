import type {BaseProps} from '@custom-types/props'

interface Props extends BaseProps {
  href?: string
  children: JSX.Element
}

export function Icon({ children, className, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      className={`${className} mx-auto transition-all hover:scale-125`}
    >
      {children}
    </a>
  )
}
