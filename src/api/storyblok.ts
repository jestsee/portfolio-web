import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
  accessToken: import.meta.env.PUBLIC_CODE_PROJECT,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
})

export const fetchCodeProjects = async () => {
  const { data } = await Storyblok.get('cdn/stories', {
    version: 'draft',
  })
  return data
}