import Image from 'next/image'

interface Props {
  id: string
  url: string
}

export default function DogComponent({ id, url }: Props) {
  return (
    <div className="border p-2 m-4">
      <Image src={url} alt="fdsaf" width={200} height={200} />
      <span>{id}</span>
    </div>
  )
}
