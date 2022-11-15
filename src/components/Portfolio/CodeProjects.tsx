import type { AllCodeProjects } from '@custom-types/codeProject'
import { useQuery } from 'react-query'
import { fetchCodeProjects } from 'src/api/storyblok'
import { CodeItem } from './CodeItem'

export const CodeProjects = () => {
  const {
    data: temp,
    isError,
    isLoading,
  } = useQuery('codeProjects', fetchCodeProjects)

  if (isLoading) return <div>LOADING OI</div>
  if (isError) return <div>ERROR OI</div>

  const data = temp as AllCodeProjects
  return (
    <>
      {data.stories.map((item) => {
        // TODO kalo mau animasi per item maka harus pake intersection observer
        return <CodeItem key={item.uuid} {...item.content} />
      })}
    </>
  )
}
