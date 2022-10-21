import type { BaseProps } from '@custom-types/props'

interface Props extends BaseProps {
  children?: JSX.Element | JSX.Element[]
}

// background: linear-gradient(180deg, #4DA69B 0%, #36FFE6 0.01%, #16695F 51.56%, #000000 100%);

export function GradientCircle({ className, children }: Props) {
  return (
    <div
      className={`${
        className ?? 'h-[400px] w-[400px]'
      } relative rounded-full bg-gradient-to-b from-teal-400 via-emerald-800 to-black`}
    >
      {children}
    </div>
  )
}
