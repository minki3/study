'use client'
import { SessionProvider, getSession } from 'next-auth/react'

export default function IsSessionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <SessionProvider>{children}</SessionProvider>
}
