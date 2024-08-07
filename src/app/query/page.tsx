'use client'

import { getAnimal, getDogs } from '@/app/components/api'
import Posts from '@/app/components/Posts'
import CustomHook from '@/app/hook/customHook'
import { useQuery } from '@tanstack/react-query'

export default function QueryTest() {
  const { setState } = CustomHook()

  const handleState = () => {
    setState('1111')
  }

  return (
    <div>
      <Posts />
      {/* <div onClick={handleState}>state 변경</div> */}
    </div>
  )
}
