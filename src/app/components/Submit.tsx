import { useFormContext, useWatch } from 'react-hook-form'
import { TData } from '@/app/form/page'

export default function Submit() {
  const { control } = useFormContext<TData>()

  const formData = useWatch({
    control,
    name: 'filed',
  })
  // console.log(formData)
  return <button></button>
}
