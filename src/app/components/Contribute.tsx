import { dataSchema, dataSchemaType } from '@/app/form/page'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

export const USER = [
  {
    id: '1234',
    nickName: 'kim1',
    img: '12345',
  },
  {
    id: '567789',
    nickName: 'kim2',
    img: '12345',
  },
  {
    id: '123421312',
    nickName: 'kim3',
    img: '12345',
  },
  {
    id: '1255555534',
    nickName: 'kim4',
    img: '12345',
  },
]

interface UserType {
  id: string
  nickName: string
  image: string
}

interface Props {
  index: number
}

export default function Contribute({ index }: Props) {
  const [users, setUsers] = useState<UserType[]>([])
  const { setValue } = useFormContext<dataSchemaType>()
  console.log(dataSchema)

  return (
    <div className=" flex flex-col mt-2">
      <div>SearchResult</div>
      {USER.map((item) => {
        return (
          <div
            key={item.id}
            className="p-2"
            onClick={() => {
              setUsers((prevUsers) => [
                ...prevUsers,
                { id: item.id, nickName: item.nickName, image: item.img },
              ])
            }}
          >
            <span className="p-2 border border-black cursor-pointer">
              {item.nickName}
            </span>
          </div>
        )
      })}
      <button
        type="button"
        className=" text-end"
        onClick={() => {
          // TODO : 타입 문제 해결
          setValue(`filed.0.contributions.${index}.contribute`, users as any)
        }}
      >
        add
      </button>
    </div>
  )
}
