import { useFormContext, useFieldArray } from 'react-hook-form'
import { dataSchemaType } from '@/app/form/page'
import Contribution from '@/app/components/Contribution'

export default function ContributionsInput() {
  const { register, control } = useFormContext<dataSchemaType>()

  const { fields, append, remove } = useFieldArray({
    control,
    name: `filed.0.contributions`,
  })

  const appendInput = () => {
    append({ title: '', contribute: [] })
  }
  const removeInput = (idx: number) => {
    remove(idx)
  }
  const disbaledButton = fields.length === 1
  return (
    <ul className="border-b-2 border-black p-2 flex flex-col">
      <span className="">contributions</span>
      <div className="flex">
        {fields.map((item, idx) => {
          return (
            <div
              key={item.id}
              className="border border-black rounded-md m-2 p-2"
            >
              <div>setting</div>
              <Contribution
                register={register}
                feildName={`filed.0.contributions.${idx}.title`}
                index={idx}
              />
              <div
                className={`${disbaledButton && 'hidden'} text-end cursor-pointer`}
                onClick={() => {
                  if (disbaledButton) {
                  } else {
                    removeInput(idx)
                  }
                }}
              >
                Delete
              </div>
            </div>
          )
        })}
      </div>
      <button className=" text-end" type="button" onClick={appendInput}>
        Add setting
      </button>
    </ul>
  )
}
