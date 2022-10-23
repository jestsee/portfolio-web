import { Icon } from '@components/Icon'
import LinkedIn from '@icons/LinkedInIcon'
import GithubIcon from '@icons/GithubIcon'
import GitlabIcon from '@icons/GitlabIcon'

const Intro = () => {
  return (
    <div className="mx-auto my-16 text-center max-sm:px-2 sm:max-w-[420px] lg:pt-12">
      <h1 className="text-5xl font-medium text-teal-400 sm:text-6xl">Jesica</h1>
      <h3 className="mt-2 text-xl sm:text-3xl">An informatics student.</h3>
      <p className="mt-2 max-sm:text-xs">
        Hi there, I'm Jesica and currently pursuing bachelor's degree at Bandung
        Institute of Technology.
      </p>
      <div className="mx-auto grid max-w-[240px] grid-cols-3 pt-8 sm:max-w-[300px]">
        <Icon href="https://www.linkedin.com/in/jestsee/">
          <LinkedIn className="h-9 sm:h-10 sm:w-10 " />
        </Icon>
        <Icon href="https://github.com/jestsee/">
          <GithubIcon className="h-9 sm:h-10 sm:w-10" />
        </Icon>
        <Icon href="https://gitlab.informatika.org/jestsee">
          <GitlabIcon className="h-9 sm:h-10 sm:w-10" />
        </Icon>
      </div>
    </div>
  )
}

export default Intro
