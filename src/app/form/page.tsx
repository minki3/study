'use client'

import View from '@/app/components/View'
import Form from '@/app/components/Form'
import { useForm, FormProvider } from 'react-hook-form'
import Submit from '@/app/components/Submit'
import MobileView from '@/app/components/MobileView'

export interface dataSchemaType {
  filed: [
    {
      category: string
      partyName: string
      hashTags: {
        hashTag: string
      }[]
      dateData: {
        date: string
        dateTime: string
        week: string
      }[]
      personnel: Number
      picture: {
        url: string
      }[]
      summarize: string
      descriptions: {
        description: string
      }[]
      curriculum: {
        time: number
        act: string
      }[]
      announcements: {
        announcement: string
      }[]
      links: {
        link: string
      }[]
      contributions: {
        title: string
        contribute: []
      }[]
      price: {
        male: number
        female: number
        influencer: number
      }[]
    },
  ]
}

export const dataSchema: dataSchemaType = {
  filed: [
    {
      category: '',
      hashTags: [{ hashTag: '' }],
      partyName: '',
      dateData: [{ date: '', dateTime: '', week: '' }],
      personnel: 0,
      picture: [{ url: '' }],
      contributions: [{ title: '', contribute: [] }],
      summarize: '',
      descriptions: [{ description: '' }],
      curriculum: [{ time: 0, act: '' }],
      announcements: [{ announcement: '' }],
      links: [{ link: '' }],
      price: [{ male: 0, female: 0, influencer: 0 }],
    },
  ],
}

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
