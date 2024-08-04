'use client'

import View from '@/app/components/View'
import Form from '@/app/components/Form'
import { useForm, FormProvider } from 'react-hook-form'
import Submit from '@/app/components/Submit'
import MobileView from '@/app/components/MobileView'
import { dataSchema, dataSchemaType } from '@/app/types/types'

export type TData = dataSchemaType

export default function FormPage() {
  const methods = useForm<dataSchemaType>({
    defaultValues: { ...dataSchema }, // 데이터 양식 주입
    mode: 'onSubmit',
  })

  return (
    <div className="flex ">
      <FormProvider {...methods}>
        <Form />
        <View />
      </FormProvider>
    </div>
  )
}
