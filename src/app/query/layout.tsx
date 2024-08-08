import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { getAnimal, getDogs } from '@/app/components/api'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['dogs', 1],
    queryFn: () => getDogs(1),
  })
  await queryClient.prefetchQuery({
    queryKey: ['animals'],
    queryFn: getAnimal,
  })

  console.log(queryClient)
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  )
}
