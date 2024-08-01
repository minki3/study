'use client'
import { useState, useEffect } from 'react'
import lodash from 'lodash'

export default function Nav() {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = lodash.throttle(() => {
      console.log(window.scrollY)
      if (window.scrollY >= 70) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }, 300)

    // 컴포넌트가 마운트될 때 이벤트 리스너를 추가합니다.
    document.addEventListener('scroll', handleScroll)

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  console.log(scroll)
  return (
    <>
      {scroll ? (
        <div className="fixed top-0 p-4 border-black border-b-2">fff</div>
      ) : (
        <div className=" border-b-2 border-black  p-4">nav</div>
      )}
    </>
  )
}
