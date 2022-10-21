import type { BaseProps } from '@custom-types/props'

interface Props extends BaseProps {
  text: string
  subText?: string
}

export function Tag({ text, subText, className }: Props) {
  return (
    <>
      <div
        className={`${className} min-w-[80px] rounded-full bg-smoke py-1 text-center sm:min-w-[130px]`}
      >
        <h3 className="font-extrabold text-mirage max-sm:text-[8pt]">{text}</h3>
        <p className="-mt-1.5 text-orange-600 max-sm:text-[7pt] sm:text-sm">
          {subText}
        </p>
      </div>
    </>
  )
}
