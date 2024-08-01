'use client'

import { useEffect, useRef } from 'react'

export default function FocusComponents() {
  const refTest = useRef<HTMLDivElement>(null)
  console.log(refTest)

  console.log(refTest.current)

  // const refHandle = () => {
  //   if (refTest.current) {
  //     refTest.current.className = 'text-red-500'
  //   }
  // }

  useEffect(() => {
    document.getElementById('focusInput')?.addEventListener('focus', () => {
      if (refTest.current) {
        refTest.current.classList.add('text-red-500')
      }
    })

    document.getElementById('focusInput')?.addEventListener('blur', () => {
      console.log(111)
      if (refTest.current) {
        refTest.current.classList.remove('text-red-500')
      }
    })
  }, [])
  return (
    <>
      <div id="focusComponents" className="" ref={refTest}>
        focus
      </div>
      <input id="focusInput" placeholder="foucstest" />
    </>
  )
}
