import CustomInput from '@/app/components/CustomInput'
import RoleSubmit from '@/app/components/RoleSubmit'
import Contribute from '@/app/components/Contribute'
import { UseFormRegister } from 'react-hook-form'
import { dataSchemaType } from '@/app/form/page'
import { useState } from 'react'

interface Props {
  register: UseFormRegister<dataSchemaType>
  feildName: any
  index: number
}

export default function Contribution({ register, feildName, index }: Props) {
  const [title, setTitle] = useState<string>('')
  const [enter, setEnter] = useState(false)

  const handleEnter = () => {
    setEnter((prev) => !prev)
  }
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <div>
      {!enter && (
        <CustomInput
          register={register}
          feildName={feildName}
          enter
          setValue={handleTitle}
          handleEnter={handleEnter}
        />
      )}
      {enter && (
        <span className="p-2 border-black border-b-2">Role : {title}</span>
      )}
      <RoleSubmit enter={enter} handleEnter={handleEnter} title={title} />
      {enter && <Contribute index={index} />}
    </div>
  )
}
