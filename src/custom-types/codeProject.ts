import type { Url } from "./url"
import type { StoryblokBase } from "./storyblokBase"

export interface CodeProject extends StoryblokBase {
  content: {
    title: string
    description: string
    link?: Url
    github?: Url
    tools: string[]
  }
}

export interface AllCodeProjects {
  stories: CodeProject[]
}