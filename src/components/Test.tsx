interface Props {
  className?: string
  text: string
}

const Test = ({ text, className = '' }: Props) => {
  return <button className={className}>{text}</button>
}

export default Test
