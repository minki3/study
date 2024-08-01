import SkeletonComponent from '@/app/skeleton/SkeletonComponent'

interface Props {
  fill: number
}

export default function SkeletonComponents({ fill }: Props) {
  const array = Array(fill).fill(0)
  return array.map((item, idx: number) => {
    return (
      <div className="grid-flow-col" key={idx}>
        <SkeletonComponent />
      </div>
    )
  })
}
