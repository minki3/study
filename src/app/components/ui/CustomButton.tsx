import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { cva } from 'class-variance-authority'

interface Props {
  label: string
  size: 'sm' | 'md' | 'lg'
  color: 'primary' | 'secondary'
  addClassName?: string
  children?: React.ReactElement
}

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export function CustomnButton({
  size,
  color,
  label,
  addClassName,
  children,
  ...props
}: Props) {
  const buttonVariants = cva(`p-2 rounded`, {
    variants: {
      size: {
        sm: `text-sm`,
        md: `text-md`,
        lg: `text-lg`,
      },
      color: {
        primary: `bg-blue-500 text-white`,
        secondary: `bg-gray-300 text-gray-700`,
      },
    },
  })
  /**
   * @variant 색상 지정 ex) gray, blue, red
   * @size 사이즈 지정 md, lg, wlg
   * @children ReactElement 아이콘같은걸 넣어준다
   * @label String을 넣어 버튼 라벨을 지정해준다
   * @additionalClass 추가할 클래스 속성을 넣어준다
   * @props 추가할 버튼 속성을 넣어준다
   */
  const className = buttonVariants({ size, color })
  return (
    <button
      // className={cn(buttonVariants({ color, size }), addClassName)}
      className={`${className}`}
      {...props}
    >
      {children && children}
      {label && label}
    </button>
  )
}
