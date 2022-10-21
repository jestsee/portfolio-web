import { GlassContainer } from './GlassContainer'
import { Skill } from './Skill'

export function Figure2() {
  return (
    <div className="relative h-[800px] w-[800px] bg-[radial-gradient(circle_closest-side,_var(--tw-gradient-stops))] from-teal-600 via-teal-900 to-mirage">
      <img
        className="absolute -top-10 left-0 right-4 mx-auto w-[420px]"
        src="./avatar2.png"
        alt="Doyan Rebahan"
      />
      <div className="absolute bottom-0 grid grid-cols-2 gap-6">
        <Skill/>
      </div>
    </div>
  )
}
