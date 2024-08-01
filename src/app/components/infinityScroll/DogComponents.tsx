import DogComponent from '@/app/components/infinityScroll/DogComponent'

interface Props {
  fetchData: any
}

export default function DogComponents({ fetchData }: Props) {
  return (
    <div className="grid-flow-col">
      {fetchData.map((item: { id: string; url: string }, idx: number) => {
        return (
          <div key={idx}>
            <DogComponent id={item.id} url={item.url} />
            {idx + 1}
          </div>
        )
      })}
    </div>
  )
}
