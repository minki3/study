import { useFormContext, useWatch } from 'react-hook-form'
import { dataSchemaType } from '@/app/form/page'
import { useEffect } from 'react'
import focus from '@/app/hook/focusHook'

export default function MobileView() {
  const { control, watch } = useFormContext<dataSchemaType>()

  const formData = useWatch({
    control,
    name: 'filed', // 관찰할 필드의 이름
  })
  console.log(formData)

  const hide = (item: any) => {
    return item.every((item: any) => item.title === '')
  }
  const hide2 = (item: any) => {
    return item.every((item: any) => item.description === '')
  }

  const { focusRef } = focus()
  console.log(focusRef)
  return (
    <div className=" flex justify-center items-center">
      <div className="bg-phone bg-cover  w-[298px] h-[600px] ">
        <div className=" mt-12 mx-[18px] h-[80%] text-white p-2 w-[87%] break-words overflow-y-scroll">
          {formData.map((item, idx) => {
            return (
              <div key={idx} className="flex flex-col gap-2">
                <div className=" flex gap-2" id="hashTag">
                  {item.hashTags.map((hashTag, htidx) => {
                    return (
                      <div
                        key={htidx}
                        className={`${hashTag.hashTag && ` bg-slate-400 rounded-md p-[2px] text-sm`}`}
                      >
                        {hashTag.hashTag && <span>#{hashTag.hashTag}</span>}
                      </div>
                    )
                  })}
                </div>
                <div id="partyName">
                  <span className=" text-2xl">{item.partyName}</span>
                </div>
                {/* <div className="bg-red-500 w-[300px] h-[200px]">img input</div> */}
                <div>
                  {!hide(item.contributions) && (
                    <span className="flex py-2 mb-2 border-white border-b-2">
                      Contributions
                    </span>
                  )}

                  {item.contributions.map((item, contributionIndex) => {
                    // console.log(item)
                    return (
                      <div key={contributionIndex} className="flex flex-col">
                        <span>{item.title}</span>
                        {item.contribute.map(
                          (
                            people: {
                              id: string
                              nickName: string
                              image: string
                            },
                            peopleIdx,
                          ) => {
                            return (
                              <span key={peopleIdx}>{people.nickName}</span>
                            )
                          },
                        )}
                      </div>
                    )
                  })}

                  <div className="flex flex-col">
                    {!hide2(item.descriptions) && (
                      <span className=" py-2 mb-2 border-white border-b-2">
                        description
                      </span>
                    )}

                    {item.descriptions.map((description, idx) => {
                      return (
                        <span key={idx}>
                          {description.description &&
                            `${idx + 1}. ${description.description}`}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div></div>
    </div>
  )
}
