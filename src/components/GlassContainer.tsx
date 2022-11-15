import type { BaseProps } from '@custom-types/props'
import type { ReactNode } from 'react'

interface Props extends BaseProps {
  children?: ReactNode
}

export function GlassContainer({ className, children }: Props) {
  return (
    <div
      className={`${className} rounded-md border border-gray-500 bg-gray-400 bg-opacity-30 bg-clip-padding backdrop-blur-md backdrop-filter`}
    >
      {children}
    </div>
  )
}
