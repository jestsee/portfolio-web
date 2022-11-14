import { Storyblok } from "src/api/storyblok"

// TODO udah work, cobain react query?
export const useStoryblok = () => {
  const fetchCodeProjects = async () => {
    const { data } = await Storyblok.get('cdn/stories', {
      version: 'draft',
    })
    return data
  }
  return { fetchCodeProjects }
}