import { Skill } from './Skill'

export function Figure2() {
  return (
    <div className="relative left-[50%] h-[1080px] w-full -translate-x-[50%] max-xs:h-[900px] lg:h-[800px] lg:w-[800px]">
      <div className="aspect-square w-full bg-[radial-gradient(circle_closest-side,_var(--tw-gradient-stops))] from-teal-600 via-teal-900 to-mirage"></div>
      <img
        className="absolute -top-10 left-0 right-4 mx-auto animate-floating"
        src="./avatar2.webp"
        alt="Tech Enthusiast"
        width="420"
        height="567"
      />
      <div className="absolute left-[50%] flex -translate-x-[50%] gap-6 max-md:flex-col max-sm:top-[340px] sm:bottom-0">
        <Skill
          img="./tool.webp"
          alt="tool illustration"
          upperText="familiar with"
          mainText="Front-End Frameworks"
          lowerText="React JS & Vue JS"
        />
        <Skill
          img="./skill.webp"
          alt="skill illustration"
          upperText="familiar with"
          mainText="Various Design Tools"
          lowerText="Adobe Photoshop & Adobe Illustrator"
        />
      </div>
    </div>
  )
}
