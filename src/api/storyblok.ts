import StoryblokClient from 'storyblok-js-client'

export const Storyblok = new StoryblokClient({
  accessToken: import.meta.env.PUBLIC_CODE_PROJECT,
  cache: {
    clear: 'auto',
    type: 'memory',
  },
})