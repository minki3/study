'use client'
import { useState, useEffect } from 'react'
import { DogData } from '@/app/infinityScroll/page'
import DogComponent from '@/app/components/infinityScroll/DogComponent'

export default function ScrollPage() {
  const [getData, setGetData] = useState<DogData[]>([])
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const API_URL =
  //     'https://api.thedogapi.com/v1/images/search?size=small&format=json&has_breeds=true&order=ASC&page=0&limit=10'

  //   // setTimeout(() => {
  //   fetch(API_URL, { method: 'get' })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setGetData(res)
  //       // setLoading(false)
  //     })
  //   // }, 2000) // 2초 지연
  // }, [])

  // if (loading) {
  //   return <div>Loading data...</div>
  // }

  return (
    <>
      fsdafsafs
      {/* {getData.map((item) => (
        <DogComponent key={item.id} id={item.id} url={item.url} />
      ))} */}
    </>
  )
}
