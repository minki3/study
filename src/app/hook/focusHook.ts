import { useEffect, useRef } from 'react'

export default function focus() {
  const focusRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {}, [])

  return { focusRef }
}
