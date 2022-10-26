import { LargeText } from './LargeText'
import { DesignItem } from './DesignItem'
import { CodeItem } from './CodeItem'
import { data } from '../data/code_project.json'

export function Portfolio() {
  return (
    <>
      <LargeText className="mb-4 text-4xl max-sm:text-2xl">
        What I am <span className="text-teal-400">working on</span>
      </LargeText>
      <p className="text-center opacity-50">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
        nemo blanditiis cum fugit doloribus tempora accusamus.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map(({title, description, tools, githubUrl, projectUrl}, idx) => {
          return (
            <CodeItem
              key={idx}
              title={title}
              description={description}
              tools={tools}
              githubUrl={githubUrl}
              projectUrl={projectUrl}
            />
          )
        })}
      </div>
      {/* <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DesignItem
          img="https://pbs.twimg.com/media/Ff7AyPdakAEzscZ?format=jpg&name=large"
          description="reate a container with overflow auto or scroll add scroll-snap-type"
          title="Scroll Snap Type"
          tools="HTML CSS"
        />
      </div> */}
    </>
  )
}
