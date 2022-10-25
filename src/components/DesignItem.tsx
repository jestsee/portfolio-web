import type { BaseProps } from '@custom-types/props'

interface Props extends BaseProps {
  img: string
  title: string
  description: string
  tools: string
}

export function DesignItem({ img, title, description, tools }: Props) {
  return (
    <div
      style={{ backgroundImage: `url("${img}")` }}
      className="group flex aspect-[3/4] w-full items-end overflow-y-hidden rounded-2xl bg-cover bg-center shadow-xl shadow-black/10 hover:scale-110"
    >
      <div className="w-full translate-y-[100%] bg-black/70 px-6 pt-8 pb-10 transition-all group-hover:block group-hover:translate-y-0">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm opacity-80">{description}</p>
        <p className="mt-6 font-montserrat text-xs uppercase">{tools}</p>
      </div>
    </div>
  )
}
