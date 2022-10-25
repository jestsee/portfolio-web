import { Skill } from './Skill'

export function Figure2() {
  return (
    <div className="relative left-[50%] w-full max-xs:h-[900px] h-[1080px] -translate-x-[50%] lg:h-[800px] lg:w-[800px]">
      <div className="aspect-square w-full bg-[radial-gradient(circle_closest-side,_var(--tw-gradient-stops))] from-teal-600 via-teal-900 to-mirage"></div>
      <img
        className="absolute -top-10 left-0 right-4 mx-auto w-[420px] animate-floating"
        src="./avatar2.png"
        alt="Tech Enthusiast"
        loading="lazy"
      />
      <div className="absolute left-[50%] flex -translate-x-[50%] gap-6 max-md:flex-col max-sm:top-[340px] sm:bottom-0">
        <Skill
          img="./tool.png"
          alt="tool illustration"
          upperText="familiar with"
          mainText="JavaScript Frameworks"
          lowerText="React JS & Vue JS"
        />
        <Skill
          img="./skill.png"
          alt="skill illustration"
          upperText="familiar with"
          mainText="Various Design Tools"
          lowerText="Adobe Photoshop & Adobe Illustrator"
        />
      </div>
    </div>
  )
}
