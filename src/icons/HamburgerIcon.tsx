import type { BaseProps } from '@custom-types/props'

interface Props extends BaseProps {}

export function HamburgerIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="273"
      height="195"
      viewBox="0 0 273 195"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.4501 0H252.851C258.009 0 262.957 2.0492 266.604 5.69679C270.252 9.34439 272.301 14.2916 272.301 19.4501C272.301 24.6085 270.252 29.5557 266.604 33.2033C262.957 36.8509 258.009 38.9001 252.851 38.9001H19.4501C14.2916 38.9001 9.34439 36.8509 5.69679 33.2033C2.0492 29.5557 0 24.6085 0 19.4501C0 14.2916 2.0492 9.34439 5.69679 5.69679C9.34439 2.0492 14.2916 0 19.4501 0V0ZM19.4501 77.8003H252.851C258.009 77.8003 262.957 79.8495 266.604 83.4971C270.252 87.1447 272.301 92.0918 272.301 97.2503C272.301 102.409 270.252 107.356 266.604 111.004C262.957 114.651 258.009 116.7 252.851 116.7H19.4501C14.2916 116.7 9.34439 114.651 5.69679 111.004C2.0492 107.356 0 102.409 0 97.2503C0 92.0918 2.0492 87.1447 5.69679 83.4971C9.34439 79.8495 14.2916 77.8003 19.4501 77.8003V77.8003ZM19.4501 155.601H252.851C258.009 155.601 262.957 157.65 266.604 161.297C270.252 164.945 272.301 169.892 272.301 175.051C272.301 180.209 270.252 185.156 266.604 188.804C262.957 192.451 258.009 194.501 252.851 194.501H19.4501C14.2916 194.501 9.34439 192.451 5.69679 188.804C2.0492 185.156 0 180.209 0 175.051C0 169.892 2.0492 164.945 5.69679 161.297C9.34439 157.65 14.2916 155.601 19.4501 155.601V155.601Z"
        fill="currentColor"
      />
    </svg>
  )
}