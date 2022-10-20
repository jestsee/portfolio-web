interface Props {
  className?: string
  children: JSX.Element
}

const Icon = ({children, className}:Props) => {
  return (<div className={className}>
    {children}
  </div>)
}

export default Icon