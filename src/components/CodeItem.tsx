import type { BaseProps } from '@custom-types/props'
import { FolderIcon } from '@icons/FolderIcon'
import { GithubOutlineIcon } from '@icons/GithubOutlineIcon'
import { OpenIcon } from '@icons/OpenIcon'

interface Props extends BaseProps {
  title: string
  description: string
  tools: string
}

export function CodeItem({ title, description, tools }: Props) {
  return (
    <div className="w-full h-fit rounded-2xl bg-slate-800 bg-cover bg-center px-8 py-10 shadow-xl shadow-black/10">
      <div className="flex justify-between">
        <FolderIcon className="h-10 w-10 text-teal-400" />
        <div className="flex gap-x-4">
          <OpenIcon className="h-6 w-6 text-smoke hover:text-teal-400" />
          <GithubOutlineIcon className="h-6 w-6 text-smoke hover:text-teal-400" />
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm opacity-80">{description}</p>
        <p className="mt-8 font-montserrat text-xs opacity-75">{tools}</p>
      </div>
    </div> 
    
  )
}
