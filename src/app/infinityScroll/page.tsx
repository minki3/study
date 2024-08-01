import DogComponent from '@/app/components/infinityScroll/DogComponent'
import React, { Suspense, useEffect, useState } from 'react'
import TestComponent from '@/app/components/test'
import ScrollPage from '@/app/components/infinityScroll/ScrollPage'
import Loading from '@/app/infinityScroll/loading'

export interface DogData {
  id: string
  url: string
}

export default async function InfinityScroll() {
  const LazyScrollComponent = React.lazy(() => import('@/app/components/test'))

  return (
    // <Suspense fallback={<div>...loading</div>}>
    //   <LazyScrollComponent />
    // </Suspense>

    <TestComponent />
  )
}
