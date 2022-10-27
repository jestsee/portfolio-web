export const useAnimationVariant = () => {
  const transitionIn = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 12 },
  }

  return { transitionIn }
}
