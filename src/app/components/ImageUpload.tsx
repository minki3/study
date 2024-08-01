import { useFormContext, useFieldArray } from 'react-hook-form'
import { dataSchemaType } from '@/app/form/page'
import CustomInput from '@/app/components/CustomInput'
import { useState } from 'react'

export default function ImageUpload() {
  const { register, control, setValue } = useFormContext<dataSchemaType>()
  const [file, setFile] = useState<File[]>([])
  const { fields, append, remove } = useFieldArray({
    control,
    name: `filed.0.picture`,
  })
  console.log('1234', fields)

  const inputAppend = () => {
    if (fields.length === 3) return alert('3개까지')
    append({ url: '' })
  }

  const disabledButton = fields.length === 1

  const removeInput = (idx: number) => {
    remove(idx)
  }
  console.log(file)
  return (
    <div>
      {fields.map((picture, idx) => {
        return (
          <div key={picture.id}>
            <label
              htmlFor={`fileUpload.${idx}`}
              className="flex border rounded-sm border-black p-2 m-6 w-[60px] h-[40px] cursor-pointer"
            >
              업로드
            </label>
            <input
              id={`fileUpload.${idx}`}
              className=" hidden"
              type="file"
              {...register(`filed.0.picture.${idx}.url`, {
                onChange: (e) => {
                  setFile([...file, e.target.files[0]])
                },
              })}
            />
            {!disabledButton && (
              <button
                type="button"
                onClick={() => {
                  removeInput(idx)
                }}
              >
                삭제
              </button>
            )}
          </div>
        )
      })}
      <button type="button" onClick={inputAppend}>
        추가
      </button>
    </div>
  )
}
