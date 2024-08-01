import QueryProvider from '@/app/provider/QueryProvider'
export default function Provider({ children }: { children: React.ReactNode }) {
  return <QueryProvider>{children}</QueryProvider>
}
