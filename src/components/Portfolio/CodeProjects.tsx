import type { AllCodeProjects } from '@custom-types/codeProject'
import { FolderIcon } from '@icons/FolderIcon'
import { Fragment } from 'react'
import { useQuery } from 'react-query'
import { fetchCodeProjects } from 'src/api/storyblok'
import { CodeItem } from './CodeItem'

export const CodeProjects = () => {
  const {
    data: temp,
    isError,
    isLoading,
  } = useQuery('codeProjects', fetchCodeProjects)

  const loadingComponent = (
    <div className="rounded-2xl bg-slate-800 px-8 py-10 shadow-xl shadow-black/10">
      <div className="animate-pulse">
        <FolderIcon className="h-10 w-10 text-teal-400" />
        <div className="mt-8 h-5 w-1/2 rounded-full bg-slate-700"></div>
        <div className="flex gap-x-2">
          <div className="mt-4 h-4 w-1/4 rounded-full bg-slate-600"></div>
          <div className="mt-4 h-4 w-1/6 rounded-full bg-slate-700"></div>
          <div className="mt-4 h-4 w-1/2 rounded-full bg-slate-700"></div>
        </div>
        <div className="flex gap-x-2">
          <div className="mt-4 h-4 w-[10%] rounded-full bg-slate-700"></div>
          <div className="mt-4 h-4 w-1/2 rounded-full bg-slate-700"></div>
          <div className="mt-4 h-4 w-1/5 rounded-full bg-slate-600"></div>
        </div>
        <div className="flex gap-x-4">
          <div className="mt-6 h-3 w-[12%] rounded-full bg-slate-700"></div>
          <div className="mt-6 h-3 w-[15%] rounded-full bg-slate-600"></div>
        </div>
      </div>
    </div>
  )

  if (isLoading)
    return (
      <>
        {[...Array(6).fill(0)].map((_, i) => (
          <Fragment key={i}>{loadingComponent}</Fragment>
        ))}
      </>
    )

  // TODO belom di-handle
  if (isError) return <div>ERROR OI</div>

  const { stories } = temp as AllCodeProjects
  return (
    <>
      {stories.map(({ uuid, content: { github, link, ...rest } }) => (
        <CodeItem
          key={uuid}
          {...rest}
          githubUrl={github?.url}
          projectUrl={link?.url}
        />
      ))}
    </>
  )
}
