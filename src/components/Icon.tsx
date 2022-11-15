import type {BaseProps} from '@custom-types/props'
import type { ReactNode } from 'react'

interface Props extends BaseProps {
  href?: string
  children: ReactNode
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
