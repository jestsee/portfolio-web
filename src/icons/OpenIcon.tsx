import type { BaseProps } from '@custom-types/props'

interface Props extends BaseProps {}

export function OpenIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.8767 3H46.2612V14.3845"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M43.9843 28.046V41.7074C43.9843 44.2225 41.9456 46.2613 39.4305 46.2613H7.55381C5.03881 46.2613 3 44.2225 3 41.7074V9.83073C3 7.31573 5.03881 5.27692 7.55381 5.27692H21.2153"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.769 23.4922L45.1228 4.13846"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
