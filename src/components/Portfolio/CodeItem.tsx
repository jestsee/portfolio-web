import type { BaseProps } from '@custom-types/props'
import { FolderIcon } from '@icons/FolderIcon'
import { GithubOutlineIcon } from '@icons/GithubOutlineIcon'
import { OpenIcon } from '@icons/OpenIcon'
import { Fragment } from 'react'

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
    <div className="h-full w-full rounded-2xl bg-slate-800 px-8 py-10 shadow-xl shadow-black/10 transition-all hover:scale-105">
      <div className="flex justify-between">
        <FolderIcon className="h-10 w-10 text-teal-400" />
        <div className="flex items-center gap-x-4">
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
          {tools.map((item, idx) => {
            return <Fragment key={idx}>{item}&emsp;</Fragment>
          })}
        </p>
      </div>
    </div>
  )
}
