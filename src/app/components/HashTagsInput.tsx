import { useFormContext, useFieldArray } from 'react-hook-form'
import { dataSchemaType } from '@/app/types/types'
import CustomInput from '@/app/components/CustomInput'

export default function HashTagsInput() {
  const { register, control } = useFormContext<dataSchemaType>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: `filed.0.hashTags`,
  })

  const appendInput = () => {
    // 최대 갯수
    if (fields.length === 3) return alert('3개 입력 가능')

    append({ hashTag: '' })
  }
  const removeInput = (idx: number) => {
    remove(idx)
  }
  const disabled = fields.length === 1
  return (
    <ul className="border-b-2 border-black p-2 ">
      <span>hashtag</span>
      {fields.map((hastag, idx) => {
        return (
          <div key={hastag.id} className="flex items-center ">
            <CustomInput
              register={register}
              feildName={`filed.0.hashTags.${idx}.hashTag`}
              appendInput={appendInput}
              removeInput={removeInput}
              index={idx}
              enter
              inherenceId={`hashTag`}
            />
            <div className="flex gap-2">
              <button type="button" onClick={appendInput}>
                +
              </button>
              <button
                type="button"
                className={`${disabled && 'text-slate-400'}`}
                onClick={() => {
                  if (fields.length === 1) {
                  } else {
                    removeInput(idx)
                  }
                }}
              >
                -
              </button>
            </div>
          </div>
        )
      })}
    </ul>
  )
}
