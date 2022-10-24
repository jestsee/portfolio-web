import type { BaseProps } from '@custom-types/props'

interface Props extends BaseProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode
}

export function LargeText({ children, className }: Props) {
  return (
    <h3
      className={`${className} mx-auto my-20 max-w-[600px] text-center text-2xl font-bold max-lg:mt-24 max-sm:text-lg`}
    >
      {children}
    </h3>
  )
}
