import type { Url } from "url"

export interface CodeProject {
  title: string
  description: string
  link?: Url
  github?: Url
  tools: string[]
}