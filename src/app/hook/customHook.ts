import { useEffect, useState } from 'react'

export default function CustomHook() {
  const [state, setState] = useState('')
  useEffect(() => {
    console.log(`state 변경 ${state}`)
  }, [state])

  return { setState }
}
