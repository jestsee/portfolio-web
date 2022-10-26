import type { BaseProps } from '@custom-types/props'

interface Props extends BaseProps {}

export function FolderIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="49"
      height="45"
      viewBox="0 0 49 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.32612 41.9351H41.9351C44.3244 41.9351 46.2612 39.9983 46.2612 37.609V13.8153C46.2612 11.4261 44.3244 9.48919 41.9351 9.48919H22.4676L18.7836 3.96321C18.3824 3.36145 17.707 3 16.9838 3H7.32612C4.93687 3 3 4.93687 3 7.32612V37.609C3 39.9983 4.93687 41.9351 7.32612 41.9351Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
