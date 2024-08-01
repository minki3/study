interface Props {
  enter: boolean
  handleEnter: () => void
  title: string
}
export default function RoleSubmit({ enter, handleEnter, title }: Props) {
  return (
    <>
      {!enter && (
        <button
          type="button"
          onClick={() => {
            if (title === '') return alert('입력해주세요.')
            handleEnter()
          }}
        >
          add
        </button>
      )}
      {enter && (
        <button type="button" onClick={handleEnter}>
          X
        </button>
      )}
    </>
  )
}
