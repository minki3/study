'use client'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getDogs } from '@/app/api/api'
import fetchDog from '@/app/hook/fetchDogs'
import { useIntersectionObserver } from '@/app/hook/InfinityScrollHook'
import DogComponents from '@/app/components/infinityScroll/DogComponents'
import SkeletonComponents from '@/app/skeleton/SkeletonComponents'

export default function Posts() {
  // const { data: firstData } = useQuery({
  //   queryKey: ['dogs', 1],
  //   queryFn: () => getDogs(1),
  // })
  const { firstData } = fetchDog({})
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['dogs'],
    queryFn: ({ pageParam }) => getDogs(pageParam),
    initialPageParam: 2,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      allPages[0],
    // lastPage.prevCurosr,
    getPreviousPageParam: (
      firstPage,
      allPages,
      firstPageParam,
      allPageParams,
    ) => firstPage.prevCursor,
  })

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
    isFetching,
  })
  if (isLoading) return <DogComponents fetchData={firstData} />
  console.log(data)
  console.log(hasNextPage)
  return (
    <div>
      <DogComponents fetchData={firstData} />
      {data &&
        data.pages.map((item, idx) => {
          return <DogComponents key={idx} fetchData={item} />
        })}
      {isFetchingNextPage && <SkeletonComponents fill={2} />}
      <div ref={setTarget} className="h-[10px]" />
    </div>
  )
}
