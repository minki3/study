import IsSessionProvider from '@/app/provider/IsSessionProvider'
import QueryProvider from '@/app/provider/QueryProvider'
export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    // <IsSessionProvider>
    <QueryProvider>{children}</QueryProvider>
    // {/* </IsSessionProvider> */}
  )
}
