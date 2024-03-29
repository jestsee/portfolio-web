import { GradientCircle } from '@components/GradientCircle'
import { Tag } from './Tag'
import { AnimationDiv } from './AnimationDiv'

export function Figure1() {
  return (
    <AnimationDiv className="py-6 sm:py-12">
      <GradientCircle className="left-[50%] h-[230px] w-[230px] -translate-x-[50%] sm:h-[400px] sm:w-[400px]">
        <img
          className="absolute -top-10 left-0 right-6 mx-auto"
          width="320"
          height="507"
          src="./avatar.webp"
          alt="Doyan Rebahan"
        />
        <Tag
          text="Front-end"
          subText="developer"
          className="absolute -translate-x-[40%] max-sm:top-20 sm:top-28"
        />
        <Tag
          text="Graphic"
          subText="designer"
          className="absolute right-0 translate-x-[40%] max-sm:top-32 sm:top-52"
        />
      </GradientCircle>
    </AnimationDiv>
  )
}
