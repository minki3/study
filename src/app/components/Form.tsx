import CustomInput from '@/app/components/CustomInput'
import HashTagsInput from '@/app/components/HashTagsInput'
import ContributionsInput from '@/app/components/ContributionsInput'
import DiscriptionsInput from '@/app/components/DiscriptionsInput'
import { dataSchemaType } from '@/app/types/types'
import { useFieldArray, useFormContext } from 'react-hook-form'
import ImageUpload from '@/app/components/ImageUpload'

export default function Form() {
  const { register, control, handleSubmit } = useFormContext<dataSchemaType>()
  const { fields, append, move } = useFieldArray({
    control,
    name: `filed`,
  })

  return (
    <form className="flex flex-col basis-1/2 border-r-2 border-black gap-2">
      {fields.map((item, idx) => {
        return (
          <div key={item.id}>
            <div className=" flex flex-col border-b-2 border-black p-2 ">
              <span>name</span>
              <div>
                <CustomInput
                  register={register}
                  feildName="filed.0.partyName"
                  id="filed.0.partyName"
                />
              </div>
            </div>
            <HashTagsInput />
            {/* <ImageUpload /> */}
            <ContributionsInput />
            <DiscriptionsInput />
          </div>
        )
      })}
    </form>
  )
}
