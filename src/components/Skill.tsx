import type { BaseProps } from '@custom-types/props'
import { GlassContainer } from './GlassContainer'

interface Props extends BaseProps {
  img: string
  alt: string
  upperText: string
  mainText: string
  lowerText: string
}

export function Skill({ img, alt, upperText, mainText, lowerText }: Props) {
  return (
    <GlassContainer className="relative max-sm:w-[240px] w-[320px] aspect-[4/5] rounded-3xl px-8 py-10 font-montserrat transition-all hover:-translate-y-12 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25">
      <img className="mx-auto" src={img} alt={alt} />
      <div className="absolute bottom-14 opacity-50">
        <h3 className="text-xs uppercase tracking-widest">{upperText}</h3>
        <h2 className="my-2 w-[70%] text-2xl font-bold tracking-wider">
          {mainText}
        </h2>
        <h3 className="text-xs font-semibold tracking-wider">{lowerText}</h3>
      </div>
    </GlassContainer>
  )
}
