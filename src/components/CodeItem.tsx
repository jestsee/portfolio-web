import type { BaseProps } from '@custom-types/props'
import { FolderIcon } from '@icons/FolderIcon'
import { GithubOutlineIcon } from '@icons/GithubOutlineIcon'
import { OpenIcon } from '@icons/OpenIcon'

interface Props extends BaseProps {
  title: string
  description: string
  tools: string[]
  githubUrl?: string
  projectUrl?: string
}

export function CodeItem({
  title,
  description,
  tools,
  projectUrl,
  githubUrl,
}: Props) {
  return (
    <div className="w-full rounded-2xl bg-slate-800 bg-cover bg-center px-8 py-10 shadow-xl shadow-black/10 hover:scale-105">
      <div className="flex justify-between">
        <FolderIcon className="h-10 w-10 text-teal-400" />
        <a
          href={projectUrl || githubUrl}
          aria-label="Project Link"
          target="_blank"
        >
          <span className="absolute top-0 left-0 z-[1] h-full w-full"></span>
        </a>
        <div className="z-[2] flex items-center gap-x-4">
          {projectUrl && (
            <a href={projectUrl} aria-label="Project URL" target="_blank">
              <OpenIcon className="h-6 w-6 text-smoke hover:text-teal-400" />
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} aria-label="Github URL" target="_blank">
              <GithubOutlineIcon className="h-6 w-6 text-smoke hover:text-teal-400" />
            </a>
          )}
        </div>
      </div>
      <div className="mt-8 tracking-wide">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm opacity-80">{description}</p>
        <p className="mt-8 font-sourcecode text-xs uppercase tracking-wider opacity-75">
          {tools.map((item) => {
            return <>{item}&emsp;</>
          })}
        </p>
      </div>
    </div>
  )
}
