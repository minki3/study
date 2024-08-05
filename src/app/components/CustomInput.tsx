import { UseFormRegister } from 'react-hook-form'
import { dataSchemaType } from '@/app/types/types'
import { useEffect } from 'react'

interface Props {
  className?: string
  register: UseFormRegister<dataSchemaType>
  feildName: any
  enter?: boolean
  appendInput?: () => void
  removeInput?: (idx: number) => void
  index?: number
  inherenceId?: string
  setValue?: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleEnter?: () => void
  id?: string
}

export default function CustomInput({
  className,
  register,
  feildName,
  enter,
  appendInput,
  removeInput,
  index,
  inherenceId,
  setValue,
  handleEnter,
  id,
}: Props) {
  useEffect(() => {
    const elementId = inherenceId ? `${inherenceId}.${index}` : `${id}`
    const element = document.getElementById(elementId)

    const handleFocus = () => {
      if (inherenceId) {
        const convert = elementId.split('.')[0]
        document
          .getElementById(convert)
          ?.scrollIntoView({ block: 'center', inline: 'center' })
        document.getElementById(convert)?.classList.add('border')
      } else {
        const lastName = elementId.split('.').length - 1
        const convert = elementId.split('.')[lastName]
        document
          .getElementById(convert)
          ?.scrollIntoView({ block: 'center', inline: 'center' })
        document.getElementById(convert)?.classList.add('border')
      }
    }

    const handleBlur = () => {
      if (inherenceId) {
        const convert = elementId.split('.')[0]
        document.getElementById(convert)?.classList.remove('border')
      } else {
        const lastName = elementId.split('.').length - 1
        const convert = elementId.split('.')[lastName]
        document.getElementById(convert)?.classList.remove('border')
      }
    }

    element?.addEventListener('focus', handleFocus)
    element?.addEventListener('blur', handleBlur)

    // 클린업 함수 추가
    return () => {
      element?.removeEventListener('focus', handleFocus)
      element?.removeEventListener('blur', handleBlur)
    }
  }, [])

  return (
    <input
      id={inherenceId ? `${inherenceId}.${index}` : `${feildName}`}
      className={`${className} border border-black p-[2px] m-2 rounded-md`}
      {...register(feildName, {
        onChange: (e) => {
          setValue && setValue(e)
        },
      })}
      onKeyDown={(e) => {
        if (enter) {
          const { value } = e.target as HTMLInputElement
          if (e.nativeEvent.isComposing || e.nativeEvent.keyCode === 229) return
          if (e.key === 'Enter') {
            if (value === '') return alert('내용 입력')
            appendInput && appendInput()
            handleEnter && handleEnter()
          }
          if (e.key === 'Backspace') {
            if (value === '' && index) {
              removeInput && removeInput(index)
              document.getElementById(`${inherenceId}.${index - 1}`)?.focus()
              e.preventDefault()
            }
          }
        }
      }}
    />
  )
}
