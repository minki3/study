'use client'
import React, { Suspense, useEffect, useState } from 'react'
import DogComponents from '@/app/components/infinityScroll/DogComponents'

export interface DogData {
  id: string
  url: string
}

export default function Test() {
  const LazyScrollComponent = React.lazy(
    () => import('@/app/components/infinityScroll/DogComponents'),
  )

  const [data, setData] = useState<DogData[]>([])
  const [page, setPage] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  console.log(page)
  useEffect(() => {
    setIsLoading(true)
    const API_URL = `https://api.thedogapi.com/v1/images/search?size=small&format=json&has_breeds=true&order=ASC&page=${page}&limit=10`
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setData((prevData) => [...prevData, ...res]))

    setIsLoading(false)
    console.log(`fetch  + ${page}`)
  }, [page])

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0]
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1)
      // setIsLoading(true)
    }
  }
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0,
    })
    const observerTarget = document.getElementById('observer')
    if (observerTarget) {
      observer.observe(observerTarget)
    }

    return () => {
      if (observerTarget) {
        observer.unobserve(observerTarget)
      }
    }
  }, [])

  // if (isLoading) return <div>..,loiadng</div>
  return (
    <>
      {/* <Suspense fallback={<div>...loading</div>}> */}
      {/* <LazyScrollComponent fetchData={data} /> */}
      <DogComponents fetchData={data} />
      <div id="observer" className="h-[50px] bg-black"></div>
      {isLoading && <div className="h-[100vh]">treurkjaskldfjsda</div>}
      {/* </Suspense> */}
    </>
  )
}
