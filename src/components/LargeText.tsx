import type { BaseProps } from '@custom-types/props'
import { motion } from 'framer-motion'
import { useAnimationVariant } from '@hooks/useAnimationVariant'

interface Props extends BaseProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode
}

export function LargeText({ children, className }: Props) {
  const { transitionIn } = useAnimationVariant()
  return (
    <motion.h3
      variants={transitionIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.75 }}
      className={`${className} mx-auto my-20 max-w-[600px] text-center text-2xl font-bold max-lg:mt-24 max-sm:text-lg`}
    >
      {children}
    </motion.h3>
  )
}
