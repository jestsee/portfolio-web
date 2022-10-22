import { Icon } from '@components/Icon'
import LinkedIn from '@icons/LinkedIn'
import Github from '@icons/Github'
import Gitlab from '@icons/Gitlab'

const Intro = () => {
  return (
    <>
      <div className="mx-auto my-8 text-center max-sm:px-8 sm:max-w-[420px]">
        <h1 className="text-5xl font-medium text-teal-400 sm:text-6xl">
          Jesica
        </h1>
        <h3 className="mt-2 text-xl sm:text-3xl">An informatics student.</h3>
        <p className="mt-2 max-sm:text-xs">
          Hi there, I'm Jesica. I'm currently pursuing my bachelor's degree
          at Bandung Institute of Technology.
        </p>
        <div className="mx-auto grid max-w-[240px] sm:max-w-[300px] grid-cols-3 pt-8">
          <Icon href="https://www.linkedin.com/in/jestsee/">
            <LinkedIn className="h-9 sm:h-10 sm:w-10 " />
          </Icon>
          <Icon href="https://github.com/jestsee/">
            <Github className="h-9 sm:h-10 sm:w-10" />
          </Icon>
          <Icon href="https://gitlab.informatika.org/jestsee">
            <Gitlab className="h-9 sm:h-10 sm:w-10" />
          </Icon>
        </div>
      </div>
    </>
  )
}

export default Intro
