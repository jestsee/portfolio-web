import { LargeText } from '@components/LargeText'
import { CodeItem } from './CodeItem'
import { data } from '@data/code_project.json'
import { AnimationDiv } from '@components/AnimationDiv'
import { Button } from '@components/Button'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CodeProjects } from './CodeProjects'
// import { DesignItem } from './DesignItem'

const queryClient = new QueryClient()
export function Portfolio() {
  return (
    <AnimationDiv>
      <LargeText className="mb-4 text-4xl max-sm:text-2xl">
        What I am <span className="text-teal-400">working on</span>
      </LargeText>
      <div className="grid gap-y-2">
        <p className="text-center opacity-80">
          Here are some of the projects I have built, including school projects
          and personal projects. These projects are divided into code-related
          projects and some of my designs.
        </p>
        <p className="text-center opacity-75">—</p>
        <h3 className="mb-4 mt-2 text-center font-sourcecode text-sm font-semibold uppercase tracking-wide text-teal-400">
          code-related projects
        </h3>
        <QueryClientProvider client={queryClient}>
          <div className="mb-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CodeProjects />
          </div>
        </QueryClientProvider>
        <Button
          title="btn-more"
          className="mx-auto mt-8 mb-16"
          outline
          link
          href="https://github.com/jestsee"
        >
          See More
        </Button>
        <p className="text-center opacity-75">—</p>
        <h3 className="mb-4 mt-2 text-center font-sourcecode text-sm font-semibold uppercase tracking-wide text-teal-400">
          design portfolio
        </h3>
        <p className="text-center font-sourcecode text-sm opacity-75">
          coming soon
        </p>
      </div>
      {/* <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DesignItem
          img="https://pbs.twimg.com/media/Ff7AyPdakAEzscZ?format=jpg&name=large"
          description="reate a container with overflow auto or scroll add scroll-snap-type"
          title="Scroll Snap Type"
          tools="HTML CSS"
        />
      </div> */}
    </AnimationDiv>
  )
}
