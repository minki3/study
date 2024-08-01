import React, { useState } from 'react'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { dataSchemaType } from '@/app/form/page'
import CustomInput from '@/app/components/CustomInput'
export default function DiscriptionsInput() {
  const { register, control, handleSubmit } = useFormContext<dataSchemaType>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: `filed.0.descriptions`,
  })

  console.log(fields)

  const appendInput = () => {
    append({ description: '' })
  }

  const removeInput = (idx: number) => {
    remove(idx)
  }
  const disabledButton = fields.length === 1
  return (
    <div className="flex flex-col border-b-2 border-black p-2">
      <span>descriptions</span>
      {fields.map((item, idx) => {
        return (
          <div key={item.id}>
            <CustomInput
              register={register}
              feildName={`filed.0.descriptions.${idx}.description`}
              enter
              index={idx}
              appendInput={appendInput}
              removeInput={removeInput}
            />
            <button type="button" onClick={appendInput}>
              +
            </button>
            <button
              type="button"
              className={`${disabledButton && 'text-slate-400'}`}
              onClick={() => {
                if (disabledButton) {
                } else {
                  removeInput(idx)
                }
              }}
            >
              -
            </button>
          </div>
        )
      })}
    </div>
  )
}
