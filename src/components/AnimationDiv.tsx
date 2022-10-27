import { motion } from 'framer-motion'
import { useAnimationVariant } from '@hooks/useAnimationVariant'
import type { BaseProps } from '@custom-types/props'

interface Props extends BaseProps {
  children: JSX.Element | JSX.Element[]
}

export const AnimationDiv = ({ className, children }: Props) => {
  const { transitionIn } = useAnimationVariant()
  return (
    <motion.div
      variants={transitionIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.55 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
