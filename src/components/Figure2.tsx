import { Skill } from './Skill'

export function Figure2() {
  return (
    <div className="relative left-[50%] aspect-square w-full -translate-x-[50%] bg-[radial-gradient(circle_closest-side,_var(--tw-gradient-stops))] from-teal-600 via-teal-900 to-mirage lg:h-[800px] lg:w-[800px]">
      <img
        className="absolute -top-10 left-0 right-4 mx-auto w-[420px]"
        src="./avatar2.png"
        alt="Tech Enthusiast"
      />
      <div className="absolute max-sm:top-[300px] sm:bottom-0 left-[50%] flex max-md:flex-col -translate-x-[50%] gap-6">
        <Skill
          img="./tool.svg"
          alt="tool illustration"
          upperText="familiar with"
          mainText="JavaScript Frameworks"
          lowerText="React JS & Vue JS"
        />
        <Skill
          img="./skill.svg"
          alt="skill illustration"
          upperText="familiar with"
          mainText="Various Design Tools"
          lowerText="Adobe Photoshop & Adobe Illustrator"
        />
      </div>
    </div>
  )
}
