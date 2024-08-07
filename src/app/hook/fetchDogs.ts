import { getDogs } from '@/app/components/api'
import { useQuery } from '@tanstack/react-query'
interface Props {}

export default function fetchDog({}: Props) {
  const { data: firstData } = useQuery({
    queryKey: ['dogs', 1],
    queryFn: () => getDogs(1),
  })
  return { firstData }
}
