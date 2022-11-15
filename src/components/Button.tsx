import type { BaseProps } from '@custom-types/props'
import classNames from 'classnames'
import type { ReactNode } from 'react'

interface Props extends BaseProps {
  type?: 'button' | 'submit' | 'reset'
  title: string
  children: ReactNode
  outline?: boolean
  link?: boolean
  href?: string
}

export const Button = ({
  type = 'button',
  href,
  title,
  children,
  className,
  outline = false,
  link = false,
}: Props) => {
  const classes = classNames([
    'w-fit rounded-md px-6 py-3 font-montserrat text-xs shadow-xl hover:scale-110 transition-all capitalize',
    className,
    {
      'border border-teal-400 text-teal-400': outline,
      'bg-teal-700': !outline,
    },
  ])

  return (
    <>
      {link ? (
        <a href={href} target="_blank" className={classes}>
          <button title={title} type={type}>
            {children}
          </button>
        </a>
      ) : (
        <button className={classes} title={title} type={type}>
          {children}
        </button>
      )}
    </>
  )
}
