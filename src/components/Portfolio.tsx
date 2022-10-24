import { LargeText } from './LargeText'
import { PortfolioItem } from './PortfolioItem'

export function Portfolio() {
  return (
    <>
      <LargeText className="mb-4 text-4xl">
        What I am <span className="text-teal-400">working on</span>
      </LargeText>
      <p className="text-center opacity-50">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
        nemo blanditiis cum fugit doloribus tempora accusamus.
      </p>
      <div className="grid grid-cols-2">
        <PortfolioItem />
      </div>
    </>
  )
}
