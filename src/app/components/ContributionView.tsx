import { useFormContext, useWatch } from 'react-hook-form'
import { dataSchemaType } from '@/app/form/page'

export default function ContributionView() {
  const { control } = useFormContext<dataSchemaType>()

  const formData = useWatch({
    control,
    name: 'filed.0.contributions', // 관찰할 필드의 이름
  })
  console.log('111', formData)
  return (
    <div>
      {formData.map((item, idx) => {
        return (
          <div key={idx} className="flex flex-col gap-2">
            <span>{item.title}</span>
            {item.contribute.map(
              (
                people: { id: string; nickName: string; image: string },
                idx,
              ) => {
                return (
                  <div key={idx} className="flex flex-col">
                    <span>{people.id}</span>
                    <span>{people.nickName}</span>
                  </div>
                )
              },
            )}
          </div>
        )
      })}
    </div>
  )
}
